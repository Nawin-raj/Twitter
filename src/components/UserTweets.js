import React from "react";
import axios from "axios";
import Feed from "./Feed";
import { useState, useEffect } from "react";
import "./SidebarOption.css";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import { setUpdatedTweets } from "../redux/actions/TweetAction";
export default function UserTweets() {
  const updatedtweets = useSelector(
    (state) => state.updatedtweets.UpdatedTweets
  );
  const dispatch = useDispatch();

  const [tweets, settweets] = useState([]);
  var name = localStorage.getItem("username");
  const boxdisplay = false;
  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${name}`;

  //const url = `http://localhost:8080/api/v1.0/tweets/${name}`;
  function qwe(data) {
    settweets(data);
  }
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setUpdatedTweets(response.data));
        qwe(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <Sidebar />
      {
        <Feed
          tweetslist={updatedtweets}
          name={name}
          flag={boxdisplay}
          qwe={qwe}
        />
      }
    </div>
  );
}
