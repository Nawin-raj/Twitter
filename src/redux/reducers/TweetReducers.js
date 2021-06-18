import { ActionTypes } from "../constants/actiontype";
const intialState1 = {
  tweets: [],
};
const intialState2 = {
  tweetlikes: [],
};
const intialState3 = {
  usertweetlikes: [],
};
const intialState4 = {
  postcomments: [],
};
const userprofile = {
  profile: {},
};

const updatedtweets = {
  UpdatedTweets: [],
};
const deletedtweets = {
  DeletedTweets: [],
};
export const tweetsReducer = (state = intialState1, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, tweets: payload };
    default:
      return state;
  }
};

export const tweetlikeReducer = (state = intialState2, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TWEETLIKES:
      return {
        tweetlikes: [...payload],
      };
    default:
      return state;
  }
};

export const usertweetlikeReducer = (
  state = intialState3,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_USERTWEETLIKES:
      return {
        ...state,
        usertweetlikes: state.usertweetlikes.concat(payload),
      };
    default:
      return state;
  }
};
export const tweetcommentsReducer = (
  state = intialState4,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_TWEET_COMMENTS:
      return { postcomments: [...state.postcomments, ...payload] };
    // [...state.postcomments, ...payload]
    default:
      return state;
  }
};

export const profileReducer = (state = userprofile, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROFILE:
      return { profile: payload };

    default:
      return state;
  }
};
export const updatedTweetsReducer = (
  state = updatedtweets,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_UPDATED_TWEETS:
      return { UpdatedTweets: payload };

    default:
      return state;
  }
};
export const deleteTweetsReducer = (
  state = deletedtweets,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_DELETED_TWETS:
      return { DeletedTweets: payload };

    default:
      return state;
  }
};
