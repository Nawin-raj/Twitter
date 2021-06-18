import React from "react";
import axios from "axios";
import "./SidebarOption.css";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import UsersList from "./UsersList";

export default function AllUsers() {
  const [allusers, setallusers] = useState([]);
  const url =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/users/all";
  //const url = "http://localhost:8080/api/v1.0/tweets/users/all";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setallusers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h2 style={{ color: "#50b7f5" }}>{"All User's👴"}</h2>
        </div>
        <UsersList users={allusers} />
      </div>
    </div>
  );
}
