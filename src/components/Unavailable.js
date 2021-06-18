import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function Unavailable() {
  const history = useHistory();
  const [like, setlike] = useState({
    color: "cyan",
    fontSize: "30px",
  });
  return (
    <div>
      <h1>
        <IconButton
          onClick={() => {
            history.push("/home");
          }}
        >
          <h1 style={like}> This service is unavailable😐😐🔙</h1>
        </IconButton>
      </h1>
    </div>
  );
}
