import React from "react";
import { Box, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ChatTexts } from "./ChatTexts.jsx";

export const ChatComponent = ({ publicMessages, passProps }) => {
  const useStyles = makeStyles(theme => ({
    chatBox: {
      display: !passProps ? "none" : "block",
      position: "fixed",
      bottom: 0,
      width: "82.3%",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
      padding: "10px"
    },
    chatHeader: {
      display: !passProps ? "none" : "flex",
      position: "sticky",
      top: 0,
      width: "100%",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
      padding: "15px",
      fontWeight: "bolder"
    },
    chatInput: {
      width: "90%",
      padding: "15px",
      border: "none",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
      fontSize: "13px"
    },
    chatButton: {
      width: "8%",
      marginLeft: "20px"
    },
    chatTexts: { display: !passProps ? "none" : "block" },
    online: {
      width: "10px",
      height: "10px",
      marginTop: "5px",
      marginLeft: "5px",
      borderRadius: "50%",
      background: "green",
      fontWeight: 500,
      fontSize: "10px",
      textAlign: "center",
      lineHeight: "11px",
      padding: "4px"
    }
  }));
  const classes = useStyles();
  const messages = ["Yooo", "Hey guys", "What's going"];
  console.log("found you", publicMessages.length);
  return publicMessages.length === 0 ? (
    <p>Fetching data!!</p>
  ) : (
    <div>
      <Grid container justify="center" className={classes.chatHeader}>
        {console.log("found you", publicMessages)}
        UserName
        <div className={classes.online}></div>
      </Grid>
      {/* {messages.map(m => {
        return <p>m</p>;
      })} */}
      <Grid className={classes.chatTexts}>
        <ChatTexts />
      </Grid>
      <Grid
        container
        // style={{  }}
        className={classes.chatBox}
      >
        <input
          type="text"
          placeholder="Type a message"
          className={classes.chatInput}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.chatButton}
        >
          Send
        </Button>
      </Grid>
    </div>
  );
};
