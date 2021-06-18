import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import "./Post.css";
import "../App.css";
import "./Feed.css";
import axios from "axios";
import LikesTweets from "./LikesTweets";

export default function Notfound() {
  const loginid = localStorage.getItem("username");
  const [likedposts, setlikedposts] = useState([]);
  // const url = `http://localhost:8080/api/v1.0/tweets/${loginid}/likedposts`;
  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${loginid}/likedposts`;
  useEffect(() => {
    GetUserLikesTweets();
  }, []);
  function GetUserLikesTweets() {
    axios
      .get(url)
      .then((res) => {
        setlikedposts(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h2 style={{ color: "#50b7f5" }}>{"Liked Post's 🤎"}</h2>
        </div>
        {likedposts.map((post) => (
          <LikesTweets key={post.tweetid} post={post} />
        ))}
      </div>
    </div>
  );
}
