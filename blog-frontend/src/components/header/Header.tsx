import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ImBlogger } from "react-icons/im";
import { headerStyles } from "../../styles/header-styles";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./user/UserMenu";
import DrawerComp from "./DrawerComp";

const Header = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  const handleAddBlog = () => {
    navigate("/add");
  };
  return (
    <AppBar sx={headerStyles.appBar}>
      <Toolbar>
        <ImBlogger
          width={"40px"}
          size={"30px"}
          style={{
            borderRadius: "50%",
            padding: "10px",
            background: "#6c5252",
          }}
        />
        {isBelowMd ? (
          <DrawerComp isLoggedIn={isLoggedIn} />
        ) : (
          <>
            <Typography
              ml={1.2}
              fontWeight={"500"}
              fontSize={{ lg: 18, md: 17, sm: 13, xs: 11 }}
              fontFamily={"Work Sans"}
              sx={{ textShadow: "4px 1px 20px #d5d5d5" }}
            >
              devBlog
            </Typography>

            {isLoggedIn && (
              <Box onClick={handleAddBlog} sx={headerStyles.addLink}>
                <Typography fontSize={20} fontFamily="Work Sans">
                  Post New Blog
                </Typography>
                <IconButton color="inherit">
                  <ImBlogger />
                </IconButton>
              </Box>
            )}
            <Box sx={headerStyles.tabContainer}>
              <Tabs
                textColor="inherit"
                TabIndicatorProps={{ style: { background: "white" } }}
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {/* @ts-ignore */}
                <Tab LinkComponent={Link} to="/" disableRipple label="Home" />
                {/* @ts-ignore */}
                <Tab
                  LinkComponent={Link}
                  to="/blogs"
                  disableRipple
                  label="Blogs"
                />
              </Tabs>
              {isLoggedIn ? (
                <UserMenu />
              ) : (
                <Link style={{ textDecoration: "none" }} to="/auth">
                  <Button endIcon={<BiLogInCircle />} sx={headerStyles.authBtn}>
                    Auth
                  </Button>{" "}
                </Link>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
