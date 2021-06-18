import { Avatar } from "@material-ui/core";
import React from "react";

export default function UserProfile(props) {
  return (
    <div>
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        </div>
        <h3> {props.loginid}</h3>
      </div>
    </div>
  );
}
