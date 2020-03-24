import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Box, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ChatTexts } from "./ChatTexts.jsx";
import { sendMessage, receiveMessage } from "../../actions/chatAction";
import { socketManagement } from "../../actions/notificationPane";
import { ChatSideComponent } from "./ChatSideComponent.jsx";

export const ChatComponent = ({
  publicMessages,
  showChat,
  removeIcon,
  backButton
}) => {
  const [message, setMessage] = useState("");
  const [isSenderMessage, setIsSenderMessage] = useState({
    status: false,
    message: ""
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const userProfile = useSelector(
    state => state.userProfileReducer.userProfileInfo
  );

  const dispatch = useDispatch();
  const useStyles = makeStyles(theme => ({
    chatBox: {
      position: "fixed",
      bottom: 0,
      width: "72.3%",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
      padding: "10px",
      ["@media (max-width:430px)"]: {
        minWidth: "96%"
      }
    },
    chatHeader: {
      display: "flex",
      float: "left",
      justifyContent: removeIcon ? "center" : "flex-start",
      position: "sticky",
      top: 0,
      width: "100%",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
      padding: "15px",
      fontWeight: "bolder",
      textAlign: "center",
      marginTop: 0
    },
    chatInput: {
      width: "79%",
      padding: "15px",
      border: "none",
      boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
      fontSize: "13px",
      ["@media (max-width:1325px)"]: {
        width: "60%"
      },
      ["@media (max-width:780px)"]: {
        width: "77%"
      },
      ["@media (max-width:430px)"]: {
        width: "77%"
      },
      ["@media (max-width:380px)"]: {
        width: "73%"
      },
      ["@media (max-width:350px)"]: {
        width: "69%"
      }
    },
    chatButton: {
      width: "8%",
      marginLeft: "20px"
    },
    chatTexts: { display: "block" },
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
  return (
    <Grid
      style={{
        display: showChat ? "block" : "none",
        height: "500px"
      }}
      container
    >
      <p className={classes.chatHeader}>
        <span
          style={{
            width: "10%",
            display: removeIcon ? "none" : "block"
          }}
          onClick={backButton}
        >
          <ArrowBackIosIcon fontSize="small" />
        </span>{" "}
        BareFoot Nomad Public Chats
      </p>
      <Grid className={classes.chatTexts}>
        <ChatTexts />
      </Grid>
      <Grid container className={classes.chatBox}>
        <input
          type="text"
          placeholder="Type a message"
          className={classes.chatInput}
          onChange={({ target }) => {
            setMessage(target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              const data = {
                senderId: userProfile.id,
                receiverId: null,
                message
              };

              dispatch(sendMessage(data, limit, page));
              setIsSenderMessage({ status: true, message });
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.chatButton}
          onClick={() => {
            const data = {
              senderId: userProfile.id,
              receiverId: null,
              message
            };

            dispatch(sendMessage(data, limit, page));
            dispatch(receiveMessage());
            setIsSenderMessage({ status: true, message });
          }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};
