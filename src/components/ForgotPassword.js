import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ForgotPassword() {
  const history = useHistory();
  const [loginid, setloginid] = useState("");
  const [password, setpassword] = useState("");
  //const url = `http://localhost:8080/api/v1.0/tweets/${loginid}/${password}/forgot`;
  const url = `http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/${loginid}/${password}/forgot`;
  function resetpassword() {
    axios.get(url);
    history.push("/");
  }
  return (
    <div className="loginscreen">
      <div className=" logindiv">
        <form
          className="qwe"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>Forgot Password</h2>
          <label>Login Id</label>
          <input
            required
            type="text"
            placeholder="Login id"
            autoFocus
            onChange={(e) => setloginid(e.target.value)}
          />

          <label>New Password</label>
          <input
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <input type="submit" value="Reset Password" onClick={resetpassword} />
        </form>
      </div>
    </div>
  );
}
