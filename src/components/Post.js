import React, { useState } from "react";
import "./Post.css";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import "reactjs-popup/dist/index.css";
import EditpostPopup from "./EditpostPopup";

import { useDispatch, useSelector } from "react-redux";
import {
  setDeletedTweets,
  setTweetlikes,
  setTweets,
  setUpdatedTweets,
  setUsertweetlikes,
} from "../redux/actions/TweetAction";
import UserComment from "./UserComment";
function Post(props) {
  const dispatch = useDispatch();
  const userpostlikes = useSelector(
    (state) => state.allusertweetlikes.usertweetlikes
  );
  const username = localStorage.getItem("username");
  console.log("called------------");
  const [like, setlike] = useState({
    color: "cyan",
    fontSize: "large",
  });
  const [unlike, setunlike] = useState({
    color: "gray",
    fontSize: "large",
  });

  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${props.loginid}/delete/${props.tweetid}`;

  const url1 = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${username}/like/${props.tweetid}`;

  const url2 = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/likes`;

  /* const url = `http://localhost:8080/api/v1.0/tweets/${props.loginid}/delete/${props.tweetid}`;
  const url1 = `http://localhost:8080/api/v1.0/tweets/${username}/like/${props.tweetid}`;
  const url2 = `http://localhost:8080/api/v1.0/tweets/likes`;*/
  function deletetweet() {
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        dispatch(setUpdatedTweets(res.data));
        //props.qwe(res.data);
      })
      .catch((err) => console.log(err));
  }
  function handlelike() {
    userpostlikes.includes(props.tweetid)
      ? console.log("already liked")
      : axios.post(url1).then((res) => {
          console.log(res.data);
          dispatch(setUsertweetlikes(props.tweetid));
          var temp = {
            post_id: props.tweetid,
            likecount: 1,
          };

          axios.post(url2).then((res) => {
            dispatch(setTweetlikes(res.data));
          });
        });
  }

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {`@` + props.loginid}{" "}
              <span className="post__headerSpecial"></span>{" "}
              <span className="post__headerSpecial">on {props.time}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{props.message}</p>
          </div>
        </div>

        {props.flag && (
          <div className="post__footer">
            <div className="">
              <IconButton>
                <UserComment
                  loginid={props.loginid}
                  tweetid={props.tweetid}
                ></UserComment>
              </IconButton>

              <span></span>
            </div>
            <div className="">
              <IconButton onClick={handlelike}>
                {props.ulikes ? (
                  <ThumbUpAltIcon style={like} fontSize="small" />
                ) : (
                  <ThumbUpAltIcon style={unlike} fontSize="small" />
                )}
              </IconButton>

              <span>{props.likes?.likecount}</span>
            </div>
          </div>
        )}
        {!props.flag && (
          <div className="post__footer">
            <IconButton>
              <EditpostPopup
                loginid={props.loginid}
                message={props.message}
                tweetid={props.tweetid}
              ></EditpostPopup>
            </IconButton>

            <IconButton
              onClick={() => {
                deletetweet();
                //window.location.reload();
              }}
            >
              <DeleteIcon className="heart" fontSize="small" />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
