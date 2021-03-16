import { makeStyles } from "@material-ui/core";
//import theme from "./theme";

export const useAuthModalStyles = makeStyles((theme) => ({
  container: {
    padding: 16,
    borderRadius: "5px !important",
  },
  inputBox: {
    display: "block",
    width: 400,
    border: `1px solid gray`,
    borderRadius: 20,
    margin: "16px 0",
    padding: "8px 16px",
    height: 48,
  },
  loginButton: {
    height: 48,
    borderRadius: 20,
    fontWeight: "bold",
    width: 400,
    fontSize: 18,
    margin: "6px 0",
  },
  titleText: {
    fontSize: 40,
    fontWeight: 600,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    position: "absolute",
    right: 16,
    top: 16,
    padding: 4,
  },
  termOfService: {
    width: 360,
    margin: "8px 16px 16px",
    textAlign: "center",
  },
}));
