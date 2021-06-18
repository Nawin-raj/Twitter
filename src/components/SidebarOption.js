import React from "react";
import "./SidebarOption.css";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/actions/TweetAction";

function SidebarOption({ active, text, Icon }) {
  {
    /* You need to define mapping for likes tweets and cal that function*/
  }

  const dispatch = useDispatch();
  const loginid = localStorage.getItem("username");
  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${loginid}/info`;
  //const url = `http://localhost:8080/api/v1.0/tweets/${loginid}/info`;

  function GetProfileInfo() {
    axios
      .get(url)
      .then((res) => dispatch(setProfile(res.data)))
      .catch((err) => console.log(err));
  }

  const history = useHistory();
  function redirect() {
    if (text === "Logout") {
      localStorage.removeItem("username");
      history.push("/");
      window.location.reload();
    } else if (text === "My Tweets") {
      history.push("/mytweets");
    } else if (text === "Home") {
      history.push("/home");
    } else if (text === "All Users") {
      history.push("/allusers");
    } else if (text === "Profile") {
      GetProfileInfo();
      history.push("/profile");
    } else if (text === "Liked") {
      history.push("/likedposts");
    } else {
      history.push("/unavailable");
    }
  }
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <IconButton onClick={redirect}>
        {" "}
        <Icon className="icon" />
      </IconButton>

      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
