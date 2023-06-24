import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      margin={"auto"}
    >
      <Typography variant="h4" fontFamily={"Arvo"} padding={3}>
        Requested Page Not Found
      </Typography>
      <img src="/notfound.jpg" alt="Not Found" width={"50%"} height="50%" />
    </Box>
  );
};

export default NotFound;
