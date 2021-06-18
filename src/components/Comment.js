import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
export default function Comment({ loginid, comment }) {
  return (
    <div className="usercomment">
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {"@" + loginid}
              <span className="post__headerSpecial"></span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
