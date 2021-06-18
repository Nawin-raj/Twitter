import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import {
  setTweetlikes,
  setUsertweetlikes,
  setTweetcomments,
} from "../redux/actions/TweetAction";

export default function TweetPage(props) {
  const userpostlikes = useSelector((state) => state.PostComments.postcomments);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [tweetobj, settweets] = useState([]);
  const [postlikes, setpostlikes] = useState([]);
  const [likesposts, setlikesposts] = useState([]);
  const boxdisplay = true;
  const username = localStorage.getItem("username");
  const url1 =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/all";
  const url2 = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${username}/likes`;
  const url3 =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/getcomments";
  const url4 = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/likes`;

  /* const url1 = "http://localhost:8080/api/v1.0/tweets/all";
  const url2 = `http://localhost:8080/api/v1.0/tweets/${username}/likes`;
  const url3 = "http://localhost:8080/api/v1.0/tweets/getcomments";
  const url4 = `http://localhost:8080/api/v1.0/tweets/likes`;*/

  function qwe(data) {
    settweets(data);
  }

  useEffect(() => {
    console.log("getting all tweets from db ");
    axios.get(url1).then((res) => {
      console.log(res.data);
      qwe(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("getting user liked post's from db ");
    axios
      .get(url2)
      .then((res) => {
        console.log(res);
        setlikesposts(res.data);
        dispatch(setUsertweetlikes(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("getting post comments ");
    axios.get(url3).then((res) => {
      console.log(res);
      dispatch(setTweetcomments(res.data));
    });
  }, []);

  useEffect(() => {
    console.log("getting all likes from db ");
    axios.post(url4).then((res) => {
      console.log(res.data);
      setpostlikes(res.data);
      dispatch(setTweetlikes(res.data));
      console.log(postlikes);
    });
  }, []);
  console.log(userpostlikes);

  return (
    <div className="app">
      <Sidebar />
      <Feed tweetslist={tweetobj} name={name} flag={boxdisplay} qwe={qwe} />
    </div>
  );
}
