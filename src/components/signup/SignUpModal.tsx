import React, { FC, useState, useContext } from "react";
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
import { AuthContext } from "../../contexts/AuthContext";

type PropsTypes = {
  open: boolean;
  handleClose: () => void;
};

const SignupModal: FC<PropsTypes> = (props) => {
  const { open, handleClose } = props;
  const classes = useAuthModalStyles();
  const { signupWithEmailAndPassword, authState, resetErr } = useContext(
    AuthContext
  );
  const authErr = authState.err;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    signupWithEmailAndPassword(email, username, password);
  };

  const handleResetErr = () => {
    if (authErr) resetErr();
    return;
  };

  const disableSignup =
    email.trim() === "" || password.trim() === "" || username.trim() === "";

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
          component='h3'
          align='center'
        >
          Welcome to Pinterest
        </Typography>
        <Typography variant='subtitle1' align='center'>
          Find new ideas to try
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
          className={classes.inputBox}
          placeholder='Username'
          disableUnderline
          onChange={(e) => {
            setUsername(e.target.value);
            handleResetErr();
          }}
        />
        <Input
          className={classes.inputBox}
          placeholder='Create a password'
          disableUnderline
          type='password'
          onChange={(e) => {
            setPassword(e.target.value);
            handleResetErr();
          }}
        />
        <Button
          className={classes.loginButton}
          color='primary'
          variant='contained'
          onClick={handleSignup}
          disabled={disableSignup}
        >
          Sign up
        </Button>
        <Typography
          className={classes.termOfService}
          variant='body2'
          align='center'
          display='block'
          noWrap={false}
        >
          By continuing, you agree to Pinterest's
          <Link variant='subtitle2'> Terms of Service, </Link>
          <Link variant='subtitle2'> Privacy policy. </Link>
        </Typography>
        <Typography variant='subtitle2' align='center'>
          Already have an account? Log in
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
