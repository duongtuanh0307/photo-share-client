import React, { FC, useContext, useState } from "react";
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

import { AuthContext } from "../../contexts/AuthContext";
import { useAuthModalStyles } from "../../styles/login";
import { PinterestLogo } from "../../icons";

type PropsTypes = {
  open: boolean;
  handleClose: () => void;
};

const LoginModal: FC<PropsTypes> = (props) => {
  const { open, handleClose } = props;
  const classes = useAuthModalStyles();
  const { loginWithEmailAndPassword, authState, resetErr } = useContext(
    AuthContext
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authErr = authState.err;

  const handleResetErr = () => {
    if (authErr) resetErr();
    return;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <IconButton onClick={handleClose} className={classes.closeButton}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id='form-dialog-title'>
        <Typography align='center'>
          <PinterestLogo />
        </Typography>
        <Typography
          className={classes.titleText}
          variant='h2'
          component='p'
          align='center'
        >
          Welcome to Pinterest
        </Typography>
      </DialogTitle>
      <DialogContent>
        {!!authErr && (
          <Typography color='error' variant='body2' align='center'>
            {authErr}
          </Typography>
        )}
        <Input
          className={classes.inputBox}
          placeholder='Email'
          disableUnderline
          onChange={(e) => {
            setEmail(e.target.value);
            handleResetErr();
          }}
        />
        <Input
          type='password'
          className={classes.inputBox}
          placeholder='password'
          disableUnderline
          onChange={(e) => {
            setPassword(e.target.value);
            handleResetErr();
          }}
        />
        <Button
          className={classes.loginButton}
          color='primary'
          variant='contained'
          disabled={email.trim() === "" || password.trim() === ""}
          onClick={() => {
            loginWithEmailAndPassword(email, password);
          }}
        >
          Log In
        </Button>
        <Typography variant='subtitle2' align='center'>
          OR
        </Typography>
        <Button
          className={classes.loginButton}
          color='secondary'
          variant='contained'
        >
          Create new account
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
