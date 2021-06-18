import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function LikesTweets(props) {
  var { loginid, time, tweetid, message } = props.post;

  const [like, setlike] = useState({
    color: "pink",
    fontSize: "large",
  });
  const profile = useSelector((state) => state.userprofile.profile);
  return (
    <div className="">
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {`@` + loginid} <span className="post__headerSpecial"></span>{" "}
                <span className="post__headerSpecial">on {time}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{message}</p>
            </div>
          </div>

          <div className="post__footer">
            <IconButton>
              <FavoriteIcon style={like} fontSize="small" />
            </IconButton>
            <IconButton>
              <FavoriteIcon style={like} fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
