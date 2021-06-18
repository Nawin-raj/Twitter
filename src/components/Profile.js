import React from "react";
import "./LogReg.css";
import "./profile.css";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import "../App.css";

export default function Profile() {
  const profile = useSelector((state) => state.userprofile.profile);
  return (
    <div className="app">
      <Sidebar />
      <div className="div1">
        <h1>Your Profile 😁😊😎</h1>
        <table>
          <tr>
            <td>
              <h2 className="text">LoginId🙉</h2>
            </td>
            <td>
              <h2 className="text"> {profile.loginid}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text">FirstName</h2>
            </td>
            <td>
              <h2 className="text"> {profile.firstname}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text">LastName</h2>
            </td>
            <td>
              <h2 className="text"> {profile.lastname}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text">Phone📞</h2>
            </td>
            <td>
              <h2 className="text">{profile.phonenum}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text">E-mail📧</h2>
            </td>
            <td>
              <h2 className="text">{profile.email}</h2>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
