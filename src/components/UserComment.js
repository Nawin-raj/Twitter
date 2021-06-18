import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ChatIcon from "@material-ui/icons/Chat";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import axios from "axios";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { setTweetcomments } from "../redux/actions/TweetAction";

export default function UserComment({ loginid, tweetid }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [comment, setcomment] = useState("");

  var commentobj = {
    tweetid: tweetid,
    comment: comment,
    loginid: loginid,
  };
  const userpostlikes = useSelector((state) => state.PostComments.postcomments);
  const url =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/addcomment";

  //const url = "http://localhost:8080/api/v1.0/tweets/addcomment";

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    addComment();
    console.log(commentobj);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  function addComment() {
    axios
      .post(url, commentobj)
      .then((res) => dispatch(setTweetcomments(res.data)))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ChatIcon
        style={{ color: "cyan" }}
        className="heart"
        fontSize="small"
        onClick={handleClickOpen}
      ></ChatIcon>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText>Comments</DialogContentText>
          {/*  */}
          {userpostlikes
            .filter((x) => x.postid === tweetid)
            .map((x) => {
              return x.comments.map((i) => (
                <Comment loginid={i.loginid} comment={i.message} />
              ));
            })}

          <TextField
            placeholder="Add a comment"
            aria-contentEditable={true}
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            onChange={(e) => setcomment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
