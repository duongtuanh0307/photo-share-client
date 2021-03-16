import React, { FC } from "react";
import Header from "../components/common/Header";
import GuestPageBoard from "../components/guestPage/GuestPageBoard";
import LoginModal from "../components/login/LoginModal";
import SignupModal from "../components/signup/SignUpModal";
import { useGuestPageStyles } from "../styles/guest";

type PropsTypes = {
  login: () => void;
};

const GuestPage: FC<PropsTypes> = (props) => {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const { login } = props;
  const classes = useGuestPageStyles();

  const handleCloseLogin = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setOpenLogin(false);
  };
  const handleToggleLogin = () => {
    setOpenLogin(!openLogin);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };
  const handleToggleSignup = () => {
    setOpenSignup(!openSignup);
  };

  return (
    <div className={classes.guestPageWrapper}>
      {openLogin && (
        <LoginModal
          handleLogin={login}
          open={openLogin}
          handleClose={handleCloseLogin}
        />
      )}
      {openSignup && (
        <SignupModal
          handleLogin={login}
          open={openSignup}
          handleClose={handleCloseSignup}
        />
      )}
      <Header
        toggleLogin={handleToggleLogin}
        toggleSignup={handleToggleSignup}
      />
      <GuestPageBoard toggleLogin={handleToggleLogin} />
    </div>
  );
};

export default GuestPage;
