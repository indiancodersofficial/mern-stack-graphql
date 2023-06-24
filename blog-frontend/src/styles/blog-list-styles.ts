import { Styles } from "./homepage-styles";

const colors = [
  "#FF9800",
  "#FF5722",
  "#607D8B",
  "#4CAF50",
  "#8BC34A",
  "#40C4FF",
  "#0277BD",
  "#4DB6AC",
  "#009688",
  "#448AFF",
  "#42A5F5",
  "#7E57C2",
  "#D32F2F",
  "#AB47BC",
];

export function randomBgColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const blogStyles: Styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    gap: 10,
    flexWrap: "wrap",
    m: 2,
  },
  card: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    height: "60vh",
    transition: "transform 1s",
    ":hover": {
      transform: "scale(1.02)",
      boxShadow: "10px 10px 20px #ccc",
    },
  },
  cardHeader: {
    fontFamily: "Work Sans",
    fontSize: "72px",
    height: "auto",
    maxHeight: "50%",
    padding: 1,
    cursor: "pointer",
  },
  dateContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  cardContent: {
    width: "100%",
    height: "75%",
    fontSize: "20px",
    fontWeight: "500",
  },
  title: {
    m: 1,
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Arvo",
    fontSize: { lg: 32, md: 28, sm: 22, xs: 18 },
    textShadow: "2px 7px 20px #000",
    ":hover": {
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
    wordWrap: "break-word",
    textOverflow: "ellipsis",
  },
  contentText: {
    padding: 2,
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "work sans",
    wordWrap: "break-word",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontWeight: "bold",
    fontFamily: "work sans",
    color: "beige",
    py: 1,
  },
};
