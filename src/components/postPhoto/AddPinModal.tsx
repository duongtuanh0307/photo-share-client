import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
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
import { PinterestLogo } from "../../icons";
import DropZone from "../common/DropZone";

type PropsTypes = {
  open: boolean;
  toggleAddPin: () => void;
};

const AddPinModal: FC<PropsTypes> = (props) => {
  const { toggleAddPin, open } = props;
  const classes = useAddPinModalStyles();

  return (
    <Dialog open={open} onClose={toggleAddPin}>
      <IconButton className={classes.closeButton} onClick={toggleAddPin}>
        <CloseIcon />
      </IconButton>
      <DialogTitle>
        <Typography align='center'>
          <PinterestLogo />
        </Typography>
        <Typography className={classes.title} variant='h3' align='center'>
          Upload Photo
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DropZone className={classes.dropZone} />
        <Input
          className={classes.inputBox}
          placeholder='Title'
          disableUnderline
        />
        <Input
          className={`${classes.inputBox} ${classes.inputBoxMultiline}`}
          placeholder='Description'
          disableUnderline
          multiline
        />
        <div className={classes.buttonsGroup}>
          <Button
            className={classes.button}
            color='secondary'
            variant='contained'
            onClick={toggleAddPin}
          >
            Cancel
          </Button>
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
          >
            Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPinModal;

const useAddPinModalStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: "2rem",
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
  inputBoxMultiline: {
    height: 96,
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
  buttonsGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    height: 48,
    borderRadius: 20,
    fontWeight: "bold",
    width: 100,
    fontSize: 18,
    margin: "6px 0 6px 8px",
  },
  dropZone: {
    height: 200,
    widht: "400",
    backgroundColor: "#ddd",
    borderRadius: 6,
  },
}));
