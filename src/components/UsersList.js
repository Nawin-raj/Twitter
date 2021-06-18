import React from "react";
import "./Post.css";
import UserProfile from "./UserProfile";

export default function UsersList(props) {
  return (
    <div>
      {props.users.map((user) => {
        console.log(user);
        return <UserProfile loginid={user}></UserProfile>;
      })}
    </div>
  );
}
