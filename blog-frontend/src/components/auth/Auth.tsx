import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImBlogger } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authActions } from "../../store/auth-slice";
import { authStyles } from "../../styles/auth-styles";
import { USER_LOGIN, USER_SIGNUP } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const Auth = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  console.log(isLoggedIn);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [login] = useMutation(USER_LOGIN);
  const [signup] = useMutation(USER_SIGNUP);
  const [isSignup, setIsSignup] = useState(false);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const onResReceived = (data: any) => {
    console.log(data);
    if (data.signup) {
      const { id, email, name } = data.signup;
      localStorage.setItem("userData", JSON.stringify({ id, name, email }));
    } else {
      const { id, email, name } = data.login;
      localStorage.setItem("userData", JSON.stringify({ id, name, email }));
    }
    dispatch(authActions.login());
    return navigate("/blogs");
  };
  const onSubmit = async ({ name, email, password }: Inputs) => {
    if (isSignup) {
      //signup
      try {
        const res = await signup({
          variables: {
            name,
            email,
            password,
          },
        });
        if (res.data) {
          onResReceived(res.data);
        }
      } catch (err: any) {
        console.log(err.message);
      }
    } else {
      try {
        const res = await login({
          variables: {
            email,
            password,
          },
        });
        if (res.data) {
          onResReceived(res.data);
        }
      } catch (err: any) {
        console.log(err.message);
      }
    }
  };
  return (
    <Box sx={authStyles.conatiner}>
      <Box sx={authStyles.logoTitle}>
        <ImBlogger
          size={"30px"}
          style={{
            borderRadius: "50%",
            padding: "10px",
            background: "#6c5252",
          }}
        />
        <Typography sx={authStyles.logoText}>devBlog</Typography>
      </Box>
      <Box
        sx={{ ...authStyles.formContainer, width: isBelowMd ? "50%" : "200px" }}
      >
        <Typography sx={authStyles.logoText}>
          {isSignup ? "Signup" : "Login"}
        </Typography>
        {/* @ts-ignore */}
        <form onSubmit={handleSubmit(onSubmit)} style={authStyles.form}>
          {isSignup && (
            <>
              <InputLabel aria-label="name"></InputLabel>
              <TextField
                helperText={
                  Boolean(errors.name) ? "Name Should Not Be Empty" : ""
                }
                error={Boolean(errors.name)}
                margin="normal"
                InputProps={{ style: { borderRadius: 20 } }}
                aria-label="name"
                label="Name"
                {...register("name", { required: true })}
              />
            </>
          )}
          <InputLabel aria-label="email"></InputLabel>
          <TextField
            helperText={Boolean(errors.email) ? "Invalid Email" : ""}
            error={Boolean(errors.email)}
            margin="normal"
            InputProps={{ style: { borderRadius: 20 } }}
            aria-label="email"
            label="Email"
            {...register("email", {
              required: true,
              validate: (val: string) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  val
                ),
            })}
          />
          <InputLabel aria-label="pass"></InputLabel>
          <TextField
            helperText={
              Boolean(errors.password) ? "Length Should Be Greater Than 5" : ""
            }
            error={Boolean(errors.password)}
            margin="normal"
            InputProps={{ style: { borderRadius: 20 } }}
            aria-label="pass"
            label="Password"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <Button type="submit" variant="contained" sx={authStyles.submitBtn}>
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup((prev) => !prev)}
            // @ts-ignore
            sx={{ ...authStyles.submitBtn, ...authStyles.switchBtn }}
          >
            Switch to {isSignup ? "Login" : "Signup"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Auth;
