import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublicMessages } from "../../actions/chatAction";

import { Box, TextField, Grid, Button } from "@material-ui/core";

export const ChatTexts = () => {
  const publicMessages = useSelector(state => state.chatReducer.publicMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    const awaitData = async () => {
      await dispatch(getPublicMessages());
    };
    awaitData();
  }, []);
  console.log("dfisfnisdnfs", publicMessages.length);
  let message = ["Yooo", "Hey guys", "What's going"];
  if (publicMessages.length > 0) message = publicMessages;
  return (
    <Grid>
      {message.map((m, index) => {
        return (
          <p
            key={index}
            style={{
              width: "40%",
              background: "#E0E0E0",
              padding: "15px",
              marginTop: "25px",
              marginLeft: "15px",
              color: "black"
            }}
          >
            {m.message}
          </p>
        );
      })}
    </Grid>
  );
};
