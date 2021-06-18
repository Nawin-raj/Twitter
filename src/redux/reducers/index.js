import { combineReducers } from "redux";
import {
  tweetlikeReducer,
  tweetsReducer,
  usertweetlikeReducer,
  tweetcommentsReducer,
  profileReducer,
  updatedTweetsReducer,
  deleteTweetsReducer,
} from "./TweetReducers";
const reducers = combineReducers({
  alltweets: tweetsReducer,
  alltweetlikes: tweetlikeReducer,
  allusertweetlikes: usertweetlikeReducer,
  PostComments: tweetcommentsReducer,
  userprofile: profileReducer,
  updatedtweets: updatedTweetsReducer,
  deletetweets: deleteTweetsReducer,
});
export default reducers;
