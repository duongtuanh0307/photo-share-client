import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Input, IconButton, Button } from "@material-ui/core";
import { SaveAlt, Link } from "@material-ui/icons";

import { PhotoTypes } from "../../data/guestPageData";

type PropsTypes = {
  photo: PhotoTypes;
  withAction: boolean;
};

const PhotoItem: FC<PropsTypes> = ({ photo, withAction }) => {
  const classes = usePhotoItemStyles();

  return (
    <div className={classes.photoItemWrapper}>
      {withAction ? (
        <>
          <div
            onClick={() => alert("click div")}
            className={classes.actionButtons}
          >
            <div className={classes.savePin}>
              <Input
                className={classes.inputPin}
                disableUnderline={true}
                onClick={(e) => e.stopPropagation()}
              />
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  alert("click Save button");
                }}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </div>
            <div className={classes.otherActions}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  alert("click Save link");
                }}
              >
                <Link />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  alert("click Download file");
                }}
              >
                <SaveAlt />
              </IconButton>
            </div>
          </div>
          <img src={photo.url} alt={photo.description} />
        </>
      ) : (
        <img src={photo.url} alt={photo.description} />
      )}
    </div>
  );
};

export default PhotoItem;

const usePhotoItemStyles = makeStyles((theme) => ({
  photoItemWrapper: {
    position: "relative",
    borderRadius: 8,
    boxShadow: `1px 1px 5px ${theme.palette.secondary.light}`,
    maxWidth: 500,
    overflow: "hidden",
    margin: 8,
    "& img": {
      display: "block",
      width: "100%",
      height: "100%",
    },
  },
  actionButtons: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: "16px 0",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0,
    "&:hover": {
      cursor: "pointer",
      opacity: 1,
      backgroundColor: theme.palette.background.paper,
    },
  },
  savePin: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 12,
    "& button": {
      width: "10%",
      borderRadius: 0,
    },
  },
  inputPin: {
    width: "90%",
    height: 40,
    fontSize: "0.825rem",
    padding: "8px 16px",
  },
  otherActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    "& button": {
      height: 36,
      width: 36,
      borderRadius: "50%",
      backgroundColor: "white",
      margin: "0 0 0 8px",
      opacity: 0.9,
      "&:hover": {
        backgroundColor: "white",
        opacity: 1,
      },
    },
  },
}));
