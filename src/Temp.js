import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsettweetlikes } from "./redux/actions/TweetAction";

export default function Temp() {
  const state = useSelector((state) => state.allusertweetlikes.usertweetlikes);
  const [num, setnum] = useState();
  const dispatch = useDispatch();
  function call() {
    var q = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    var a = [1, 2, 3, 4, 5];
    dispatch(setUsettweetlikes(a));
    console.log(state);
  }

  return (
    <div>
      <span>enter number</span>
      <input type="number" onChange={(e) => setnum(e.target.value)}></input>
      <button onClick={call}>submit</button>
      {state.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </div>
  );
}
