import TweetBox from "./TweetBox";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

function Feed(props) {
  const postlikes = useSelector((state) => state.alltweetlikes.tweetlikes);
  const userpostlikes = useSelector(
    (state) => state.allusertweetlikes.usertweetlikes
  );
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 style={{ color: "#50b7f5" }}>
          {`Welcome 😄` + localStorage.getItem("username")}
        </h2>
      </div>

      {props.flag && <TweetBox qwe={props.qwe} />}

      {props.tweetslist.map((tweet) => (
        <Post
          qwe={props.qwe}
          flag={props.flag}
          key={tweet.twetid}
          tweetid={tweet.tweetid}
          loginid={tweet.loginid}
          message={tweet.message}
          time={tweet.time}
          likes={postlikes?.find((x) => x.post_id == tweet.tweetid)}
          ulikes={userpostlikes.includes(tweet.tweetid)}
        ></Post>
      ))}
    </div>
  );
}

export default Feed;
