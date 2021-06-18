import React, { useState } from "react";
import "./TweetBox.css";
import axios from "axios";
import { Avatar, Button } from "@material-ui/core";

function TweetBox(props) {
  const [message, setmessage] = useState("");
  var loginidd = localStorage.getItem("username");
  var postobj = {
    message: message,
    time: new Date().toLocaleDateString(),
  };
  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${loginidd}/add`;
  // const url = `http://localhost:8080/api/v1.0/tweets/${loginidd}/add`;
  function sendTweet(e) {
    console.log("sending tweet to db");
    console.log(postobj);
    axios.post(url, postobj).then((res) => {
      props.qwe(res.data);
      console.log("updates tweets state from child ");
      console.log(res);
      setmessage("");
    });
  }
  function submithandler(e) {
    e.preventDefault();
  }
  return (
    <div className="tweetBox">
      <form onSubmit={submithandler}>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setmessage(e.target.value)}
            value={message}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
