import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { useGuestPageStyles } from "../../styles/guest";
import { PinterestLogo } from "../../icons";

type PropsTypes = {
  className?: string;
  auth?: boolean;
  toggleLogin?: () => void;
  toggleSignup?: () => void;
};

const Header: FC<PropsTypes> = (props) => {
  const { toggleLogin, toggleSignup, auth, className } = props;
  const history = useHistory();
  const classes = useGuestPageStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={className}
      >
        <Grid item xs={6} sm={8} className={classes.logo}>
          <PinterestLogo
            onClick={() => {
              history.push("/");
            }}
          />
          <Typography variant="h3" className={classes.logoText}>
            Pinterest
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.buttonGroup}>
          {!auth && (
            <>
              <Button
                onClick={toggleLogin}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Log in
              </Button>
              <Button
                onClick={toggleSignup}
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Sign up
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
