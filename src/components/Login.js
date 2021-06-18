import React, { useState } from "react";
import "./LogReg.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [loginid, setloginid] = useState("");
  const [password, setpassword] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [spancolor, setspancolor] = useState({
    visibility: "hidden",
    color: "",
    fontSize: "",
  });

  const history = useHistory();
  var obj = {
    loginid: loginid,
    password: password,
  };
  //const url = "http://localhost:8080/api/v1.0/tweets/login";
  const url =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/login";

  function login() {
    if (loginid && password) {
      console.log("in login method");
      loginapi();
    } else {
      console.log("please enter");
    }
  }

  function loginapi() {
    axios
      .post(url, obj)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Valid user") {
          localStorage.setItem("username", loginid);
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log("Error: ", err.response.data);
        if (err.response.data.httpstatus === "UNAUTHORIZED") passwordvali();
      });
  }

  function submithandler(e) {
    e.preventDefault();
  }
  function passwordvali() {
    console.log("called");
    seterrormsg("Invalid login details");
    setspancolor({ visibility: "visible", color: "red", fontSize: "20px" });
  }

  return (
    <div className="loginscreen">
      <div className="text-typing">
        <p>Welcome To Tweet</p>
      </div>
      <div className=" logindiv">
        <form className="qwe" onSubmit={submithandler}>
          <h2>Sign In to Tweet</h2>
          <label>Login Id</label>
          <input
            required
            type="text"
            placeholder="Login id"
            autoFocus
            onChange={(e) => setloginid(e.target.value)}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>Password</label>
            <Link to="/forgot">
              <label style={{ color: "white" }}>Forgot Password</label>
            </Link>
          </div>

          <input
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <span style={spancolor}>{errormsg}</span>

          <input type="submit" value="Submit" onClick={login} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Don't have an account?</h3>
            <Link to="/signup">
              <h3 style={{ color: "white" }}>Register Now</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
