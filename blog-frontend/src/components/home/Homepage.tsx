import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { homepageStyles } from "../../styles/homepage-styles";
import Footer from "./Footer";

const Homepage = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={homepageStyles.container}>
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}>
          Write and Share Your Blog With Millions Of People
        </Typography>
        <img
          width={isBelowMd ? "75%" : "50%"}
          height={isBelowMd ? "75%" : "50%"}
          //@ts-ignore
          style={homepageStyles.image}
          src="/blog.png"
          alt="Blog"
        />
      </Box>

      <Box sx={homepageStyles.wrapper}>
        <img
          width={isBelowMd ? "75%" : "50%"}
          height={isBelowMd ? "75%" : "50%"}
          //@ts-ignore
          style={homepageStyles.image}
          src="/publish.png"
          alt="Publish"
        />

        <Typography sx={homepageStyles.text}>
          Share Your Knowledge And Expertise To World{" "}
        </Typography>
      </Box>

      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}>
          Choose Different Path and Make A Big Difference To Your Life
        </Typography>
        <img
          width={isBelowMd ? "75%" : "50%"}
          height={isBelowMd ? "75%" : "50%"}
          //@ts-ignore
          style={homepageStyles.image}
          src="/articles.png"
          alt="Articles"
        />
      </Box>
    </Box>
  );
};

export default Homepage;
