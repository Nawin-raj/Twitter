import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

function Sidebar() {
  var history = useHistory();
  function redirect() {
    history.push("/home");
  }
  return (
    <div className="sidebar">
      <IconButton onClick={redirect}>
        <TwitterIcon className="sidebar__twitterIcon" />
      </IconButton>
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="My Tweets" />
      <SidebarOption Icon={FavoriteIcon} text="Liked" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={GroupIcon} text="All Users" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={ExitToAppIcon} text="Logout" />
    </div>
  );
}

export default Sidebar;
