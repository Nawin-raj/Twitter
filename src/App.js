import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TweetPage from "./components/TweetPage";
import Notfound from "./components/Notfound";
import ForgotPassword from "./components/ForgotPassword";
import UserTweets from "./components/UserTweets";
import AllUsers from "./components/AllUsers";
import Profile from "./components/Profile";
import LikesTweets from "./components/LikesTweets";
import Unavailable from "./components/Unavailable";

function App() {
  return (
    <Router>
      <div className="App">
        {/* add image here if u want */}
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/forgot" exact component={ForgotPassword} />
        <Route path="/home" exact component={TweetPage} />
        <Route path="/likedposts" exact component={Notfound} />
        <Route path="/mytweets" exact component={UserTweets} />
        <Route path="/allusers" exact component={AllUsers} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/unavailable" exact component={Unavailable} />
      </div>
    </Router>
  );
}

export default App;
