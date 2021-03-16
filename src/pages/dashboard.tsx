import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Fab, Menu, MenuItem } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import Header from "../components/common/Header";
import PhotoGrid from "../components/common/PhotoGrid";
import AddPinModal from "../components/postPhoto/AddPinModal";
import { photos } from "../data/photos";
import { currentUser } from "../data/currentUser";

type PropsTypes = {
  logout: () => void;
};

const Dashboard: FC<PropsTypes> = (props) => {
  const classes = useDashboardStyles();
  const { logout } = props;

  const [openAddPin, setOpenAddPin] = React.useState(false);
  const [openUserActionsMenu, setOpenUserActions] = React.useState(false);

  function toggleOpenUserMenu() {
    setOpenUserActions(!openUserActionsMenu);
  }

  return (
    <div className={classes.dashboardWrapper}>
      <Header auth className={classes.header} />
      <PhotoGrid
        photoHaveAction
        className={classes.photoGrid}
        photos={photos}
      />
      <Fab
        component="button"
        variant="round"
        size="medium"
        className={classes.userButton}
        id="userButton"
        onClick={() => {
          setOpenUserActions(true);
        }}
      >
        {currentUser.profileImage.trim() !== "" ? (
          <img src={currentUser.profileImage} alt="user avatar" />
        ) : (
          currentUser.username.slice(0, 1).toUpperCase()
        )}
      </Fab>
      <Fab
        component="button"
        variant="round"
        size="medium"
        className={classes.addButton}
        onClick={() => setOpenAddPin(true)}
      >
        <Add />
      </Fab>
      {openUserActionsMenu && (
        <UserActionsMenu
          logout={logout}
          open={openUserActionsMenu}
          toggleMenu={toggleOpenUserMenu}
        />
      )}
      {openAddPin && (
        <AddPinModal
          open={openAddPin}
          toggleAddPin={() => {
            setOpenAddPin(!openAddPin);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;

const UserActionsMenu: FC<{
  open: boolean;
  toggleMenu: () => void;
  logout: () => void;
}> = ({ open, toggleMenu, logout }) => {
  const history = useHistory();

  return (
    <Menu
      id="user-actions-menu"
      open={open}
      onClose={toggleMenu}
      anchorEl={document.getElementById("userButton")}
      PaperProps={{
        style: {
          backgroundColor: "white",
          left: "50%",
          transform: "translateX(-25%) translateY(-75%)",
        },
      }}
    >
      <MenuItem
        onClick={() => {
          toggleMenu();
          history.push("/my_page");
        }}
      >
        My page
      </MenuItem>
      <MenuItem onClick={logout}>Log out</MenuItem>
    </Menu>
  );
};

const useDashboardStyles = makeStyles((theme) => ({
  dashboardWrapper: {
    width: "100vw !important",
    height: "200vh !important",
    display: "flex",
    overflow: "hidden",
  },
  photoGrid: {
    marginTop: "60px !important",
    flexDirection: "column",
    width: "100vw",
    height: "200vh",
    justifyContent: "flex-start",
  },
  header: {
    height: 60,
    position: "fixed",
    backgroundColor: "white",
    top: 0,
    zIndex: 15,
  },
  addButton: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    zIndex: 20,
    position: "fixed",
    bottom: 16,
    right: 16,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  userButton: {
    color: "black",
    backgroundColor: "white",
    position: "fixed",
    bottom: 72,
    right: 16,
    zIndex: 20,
  },
}));
