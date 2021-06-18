import React, { useState } from "react";
import "./LogReg.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Register() {
  const url =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/register";
  const url1 =
    "http://springboottweetapp.us-east-2.elasticbeanstalk.com/api/v1.0/tweets/usernamecheck";

  /*const url = "http://localhost:8080/api/v1.0/tweets/register";
  const url1 = "http://localhost:8080/api/v1.0/tweets/usernamecheck";*/

  const history = useHistory();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [loginid, setloginid] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phonenum, setphonenum] = useState("");
  const [email, setemail] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [phoneerrmsg, setphoneerrmsg] = useState("");
  const [emailerrmsg, setemailerrmsg] = useState("");
  const [pswderrmsg, setpswderrmsg] = useState("");
  const [uspancolor, setuspancolor] = useState({
    visibility: "hidden",
    color: "",
    fontSize: "",
  });
  const [pspancolor, setpspancolor] = useState({
    visibility: "hidden",
    color: "",
    fontSize: "",
  });
  const [cspancolor, setcspancolor] = useState({
    visibility: "hidden",
    color: "",
    fontSize: "",
  });
  const [espancolor, setespancolor] = useState({
    visibility: "hidden",
    color: "",
    fontSize: "",
  });

  const registerobj = {
    loginid: loginid,
    firstname: firstname,
    lastname: lastname,
    password: password,
    phonenum: phonenum,
    email: email,
  };
  /*  This function makes call to RegisterAPI. It sends register object. */
  function register() {
    if (
      firstname &&
      lastname &&
      loginid &&
      password &&
      phonenum &&
      email &&
      emailcheck()
    ) {
      console.log("Register api is called");
      console.log(registerobj);
      registerapi();
    } else {
      console.log("Register api is failed");
      setemailerrmsg("Invalid email");
      setespancolor({
        visibility: "visible",
        color: "red",
        fontSize: "15px",
      });
    }
  }
  /*  This function makes call to RegisterAPI. It sends register object. */
  function registerapi() {
    axios
      .post(url, registerobj)
      .then((res) => history.push("/"))
      .catch((err) => console.log("Error: ", err));
  }
  //Page reload prevent function
  function submithandler(e) {
    e.preventDefault();
  }
  //UserName availability check function
  function usernamecheck() {
    if (loginid) {
      console.log("api called for username check" + loginid);
      axios.post(url1, loginid).then((res) => {
        console.log(res);
        if (res.data === "Taken") {
          seterrormsg("username already taken");
          setuspancolor({
            visibility: "visible",
            color: "red",
            fontSize: "16px",
          });
        } else {
          seterrormsg("username available");
          setuspancolor({
            visibility: "visible",
            color: "green",
            fontSize: "16px",
          });
        }
      });
    } else console.log("api not called");
  }
  //Password and retype password check function
  function passwordcheck() {
    if (password !== confirmpassword) {
      setpswderrmsg("Confirm password is not matched");
      setpspancolor({
        visibility: "visible",
        color: "red",
        fontSize: "15px",
      });
    } else {
    }
  }
  //phonenumber validation function
  function phonenumcheck() {
    var phoneno = /^\d{10}$/;
    if (!phoneno.test(phonenum)) {
      setphoneerrmsg("Invalid phone number");
      setcspancolor({ visibility: "visible", color: "red", fontSize: "15px" });
    } else {
      setphoneerrmsg("");
      setpspancolor({ visibility: "hidden", color: "green", fontSize: "15px" });
    }
  }
  function emailcheck() {
    var regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  return (
    <div className="loginscreen">
      <div className="text-typing">
        <p>Welcome To Tweet</p>
      </div>
      <div className=" registerdiv">
        <form onSubmit={submithandler}>
          <h2>Sign Up</h2>

          <input
            required
            type="text"
            placeholder="First name.."
            autoFocus
            onChange={(e) => setfirstname(e.target.value)}
          />

          <input
            required
            type="text"
            placeholder="Last name"
            onChange={(e) => setlastname(e.target.value)}
          />

          <input
            required
            type="text"
            placeholder="Login Id"
            onChange={(e) => setloginid(e.target.value)}
          />
          <span style={uspancolor}>{errormsg}</span>

          <input
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            onFocus={usernamecheck}
          />

          <input
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setconfirmpassword(e.target.value)}
            onKeyUp={(e) => {
              if (password === e.target.value) {
                setpswderrmsg("");
                setuspancolor({
                  visibility: "hidden",
                  color: "green",
                  fontSize: "15px",
                });
              }
            }}
          />
          <span style={pspancolor}>{pswderrmsg}</span>

          <input
            required
            type="number"
            placeholder="Contact Number"
            onChange={(e) => setphonenum(e.target.value)}
            onFocus={() => {
              passwordcheck();
            }}
          />
          <span style={cspancolor}>{phoneerrmsg}</span>

          <input
            required
            type="text"
            placeholder="Your email."
            onChange={(e) => setemail(e.target.value)}
            onFocus={phonenumcheck}
          />
          <span style={espancolor}>{emailerrmsg}</span>

          <input type="submit" value="Submit" onClick={register} />
        </form>
      </div>
    </div>
  );
}
