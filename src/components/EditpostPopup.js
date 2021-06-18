import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import EditIcon from "@material-ui/icons/Edit";
import "./Post.css";
import { useDispatch } from "react-redux";

import { setUpdatedTweets } from "../redux/actions/TweetAction";
import axios from "axios";

export default function EditpostPopup({ loginid, message, tweetid }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [updatedmessage, setupdatedmessage] = useState("");
  var messageobj = {
    message: updatedmessage,
  };

  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${loginid}/update/${tweetid}`;
  //const url = `http://localhost:8080/api/v1.0/tweets/${loginid}/update/${tweetid}`;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickclose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    updatetweet();
    console.log("api ic called");
    console.log(messageobj);

    setOpen(false);
    //window.location.reload(false);
  };
  function updatetweet() {
    axios
      .put(url, messageobj)
      .then((res) => {
        console.log(res.data);
        dummy();
      })
      .catch((err) => console.log(err));
  }

  const url1 = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${loginid}`;

  function dummy() {
    axios
      .get(url1)
      .then((response) => {
        dispatch(setUpdatedTweets(response.data));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <EditIcon
        className="heart"
        fontSize="small"
        onClick={handleClickOpen}
      ></EditIcon>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText>Update the Tweet </DialogContentText>
          <TextField
            aria-contentEditable={true}
            autoFocus
            margin="dense"
            id="name"
            type="text"
            defaultValue={message}
            fullWidth
            onChange={(e) => setupdatedmessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickclose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
