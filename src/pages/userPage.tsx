import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Avatar, Typography, Tabs, Tab, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { currentUser, savedPhotos, uploadedPhotos } from "../data/currentUser";
import Header from "../components/common/Header";
import PhotoGrid from "../components/common/PhotoGrid";

type UserInfoTypes = {
  className?: string;
};

const UserPage: FC = () => {
  const classes = useUserPageStyles();

  return (
    <>
      <Header auth className={classes.header} />
      <UserInfo className={classes.userInfo} />
      <ActionTabs />
    </>
  );
};

export default UserPage;

const useUserPageStyles = makeStyles((theme) => ({
  header: {
    height: 60,
    positon: "fixed",
    top: 0,
    left: 0,
  },
  photoGridWrapper: {
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
    justifyContent: "flex-start",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  avatarWrapper: {
    position: "relative",
  },
  userName: {
    fontWeight: 700,
    fontSize: "3rem",
  },
  userEmail: {
    fontSize: "1rem",
    padding: 8,
  },
  tabsList: {
    marginBottom: 16,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 20,
    height: 32,
    width: 32,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

const UserInfo: FC<UserInfoTypes> = (props) => {
  const { className } = props;
  const classes = useUserPageStyles();

  return (
    <div className={className}>
      <div className={classes.avatarWrapper}>
        <Avatar className={classes.avatar} alt="user avatar" variant="circular">
          {currentUser.profileImage.trim() !== "" ? (
            <img src={currentUser.profileImage} alt="user avatar" />
          ) : (
            currentUser.username.slice(0, 1).toUpperCase()
          )}
        </Avatar>
        <IconButton className={classes.editIcon}>
          <Edit />
        </IconButton>
      </div>
      <Typography className={classes.userName} variant="h2">
        {currentUser.username}
      </Typography>
      <Typography className={classes.userEmail} variant="subtitle2">
        {currentUser.email}
      </Typography>
    </div>
  );
};

const ActionTabs: FC = () => {
  const classes = useUserPageStyles();
  const [openingTab, setOpeningTab] = React.useState<"0" | "1">("0");
  return (
    <>
      <Tabs
        className={classes.tabsList}
        textColor="primary"
        centered
        value={openingTab}
      >
        <Tab value="0" label="Saved Pins" onClick={() => setOpeningTab("0")} />
        <Tab value="1" label="Uploaded" onClick={() => setOpeningTab("1")} />
      </Tabs>
      {openingTab === "0" ? (
        <PhotoGrid
          photoHaveAction
          photos={savedPhotos}
          className={classes.photoGridWrapper}
        />
      ) : (
        <PhotoGrid
          photoHaveAction
          photos={uploadedPhotos}
          className={classes.photoGridWrapper}
        />
      )}
    </>
  );
};
