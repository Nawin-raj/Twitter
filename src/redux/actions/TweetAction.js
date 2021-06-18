import { ActionTypes } from "../constants/actiontype";

export const setTweets = (tweet) => {
  return {
    type: ActionTypes.SET_TWEETS,
    payload: tweet,
  };
};

export const setTweetlikes = (tweetlikes) => {
  return {
    type: ActionTypes.SET_TWEETLIKES,
    payload: tweetlikes,
  };
};
export const setUsertweetlikes = (likes) => {
  return {
    type: ActionTypes.SET_USERTWEETLIKES,
    payload: likes,
  };
};
export const setTweetcomments = (comments) => {
  return {
    type: ActionTypes.SET_TWEET_COMMENTS,
    payload: comments,
  };
};
export const setProfile = (profile) => {
  return {
    type: ActionTypes.SET_PROFILE,
    payload: profile,
  };
};

export const setUpdatedTweets = (tweets) => {
  return {
    type: ActionTypes.SET_UPDATED_TWEETS,
    payload: tweets,
  };
};
export const setDeletedTweets = (tweets) => {
  return {
    type: ActionTypes.SET_DELETED_TWETS,
    payload: tweets,
  };
};
