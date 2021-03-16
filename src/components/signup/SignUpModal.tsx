import React, { FC } from "react";
import {
  Input,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { useAuthModalStyles } from "../../styles/login";
import { PinterestLogo } from "../../icons";

type PropsTypes = {
  open: boolean;
  handleClose: () => void;
  handleLogin: () => void;
};

const SignupModal: FC<PropsTypes> = (props) => {
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
        <Typography variant="subtitle1" align="center">
          Find new ideas to try
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
          placeholder="Create a password"
          disableUnderline
        />
        <Button
          className={classes.loginButton}
          color="primary"
          variant="contained"
          onClick={handleLogin}
        >
          Sign up
        </Button>
        <Typography
          className={classes.termOfService}
          variant="body2"
          align="center"
          display="block"
          noWrap={false}
        >
          By continuing, you agree to Pinterest's
          <Link variant="subtitle2"> Terms of Service, </Link>
          <Link variant="subtitle2"> Privacy policy. </Link>
        </Typography>
        <Typography variant="subtitle2" align="center">
          Already have an account? Log in
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
