import { makeStyles } from "@material-ui/core";

export const useGuestPageStyles = makeStyles((theme) => ({
  button: {
    height: 40,
    borderRadius: 20,
    margin: "0.5rem",
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "0 1rem",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 1rem",
  },
  logoText: {
    color: theme.palette.primary.main,
    marginLeft: "0.5rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  photoGrid: {
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "100vw",
    height: "150vh",
  },
  guestPageWrapper: {
    positon: "relative",
    overflow: "hidden",
  },
}));
