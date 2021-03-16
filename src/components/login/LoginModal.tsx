import React, { FC } from "react";
import {
  Input,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { useAuthModalStyles } from "../../styles/login";
import { PinterestLogo } from "../../icons";

type PropsTypes = {
  open: boolean;
  handleClose: () => void;
  handleLogin: () => void;
};

const LoginModal: FC<PropsTypes> = (props) => {
  const { open, handleClose, handleLogin } = props;
  const classes = useAuthModalStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <IconButton onClick={handleClose} className={classes.closeButton}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id="form-dialog-title">
        <Typography align="center">
          <PinterestLogo />
        </Typography>
        <Typography
          className={classes.titleText}
          variant="h2"
          component="h3"
          align="center"
        >
          Welcome to Pinterest
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Input
          className={classes.inputBox}
          placeholder="Email"
          disableUnderline
        />
        <Input
          className={classes.inputBox}
          placeholder="password"
          disableUnderline
        />
        <Button
          className={classes.loginButton}
          color="primary"
          variant="contained"
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Typography variant="subtitle2" align="center">
          OR
        </Typography>
        <Button
          className={classes.loginButton}
          color="secondary"
          variant="contained"
        >
          Create new account
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
