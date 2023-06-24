import { SxProps } from "@mui/material";

export type Styles = {
  [key: string]: SxProps;
};

export const homepageStyles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: { md: 10, xs: 5 },
  },
  wrapper: {
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    justifyContent: "center",
    gap: { md: 4, xs: 2 },
    alignItems: "center",
    padding: 6,
  },
  text: {
    fontFamily: "Work Sans",
    fontSize: { lg: 50, md: 40, sm: 35, xs: 20 },
    textShadow: "12px 10px 10px #ccc",
  },
  image: {
    boxShadow: "10px 10px 25px #000",
    borderRadius: 20,
  },
  footerContainer: {
    bgcolor: "#404040",
    display: "flex",
    alignItems: "center",
    // height: "20vh",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    height: "20vh",
  },
  footerBtn: {
    borderRadius: 10,
    bgcolor: "blueviolet",
    width: "20%",
    maxWidth: "200px",
    ":hover": {
      bgcolor: "#bd63fa",
    },
    fontSize: { lg: 12, md: 12, sm: 8, xs: 8 },
  },
  footerText: {
    fontFamily: "Work Sans",
    fontWeight: "500",
    fontSize: { lg: 20, md: 18, sm: 12, xs: 10 },
    color: "white",
  },
};
