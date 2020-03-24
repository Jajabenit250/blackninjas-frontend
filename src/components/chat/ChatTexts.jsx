import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { getPublicMessages, getUsersInfo } from "../../actions/chatAction";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  TextField,
  Grid,
  Button,
  CircularProgress
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

export const ChatTexts = ({ senderMessage }) => {
  const [chatOutPut, setChatOutPut] = useState({
    styles: {
      backgroundColor: "black",
      float: "left"
    }
  });
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const data = useSelector(state => {
    return {
      userProfileInfo: state.userProfileReducer.userProfileInfo,
      allUsersProfileInfo: state.chatReducer.allUsersInfo,
      publicMessages: state.chatReducer.publicMessages
    };
  });
  const dispatch = useDispatch();
  const useStyles = makeStyles(theme => ({
    senderMessage: {
      display: "block",
      float: "right"
    }
  }));
  useEffect(() => {
    const awaitData = async () => {
      await dispatch(getPublicMessages(limit, page));
    };
    dispatch(getUsersInfo());
    awaitData();
  }, []);
  const classes = useStyles();
  let message = [];

  if (data.publicMessages.hasOwnProperty("rows")) {
    message = data.publicMessages;
  }
  return (
    <>
      {message.length === 0 ? (
        <CircularProgress />
      ) : (
        message.rows.map((m, index) => {
          if (data.allUsersProfileInfo.length > 0) {
            const userFound = data.allUsersProfileInfo.find(
              user => user.id === m.senderId
            );
            return (
              <Grid
                style={{
                  width: "100%",
                  paddingTop: "7px",
                  paddingBottom: "10px",
                  paddingRight: "30px",
                  paddingLeft: "30px"
                }}
                key={index}
              >
                <Grid
                  container
                  style={{
                    float:
                      data.userProfileInfo &&
                      m.senderId === data.userProfileInfo.id
                        ? "right"
                        : "left",
                    background:
                      data.userProfileInfo &&
                      m.senderId === data.userProfileInfo.id
                        ? "#0094FF"
                        : "#E0E0E0",
                    color:
                      data.userProfileInfo &&
                      m.senderId === data.userProfileInfo.id
                        ? "white"
                        : "black",
                    display: "inline-block",
                    fontSize: "13px",
                    width: "52%",
                    padding: "10px",
                    marginTop: "25px",
                    wordBreak: "break-all",
                    borderRadius: "10px"
                  }}
                >
                  {data.allUsersProfileInfo.length > 0 &&
                  data.allUsersProfileInfo[index].image ? (
                    <img
                      src={
                        userFound ? (
                          userFound.image
                        ) : (
                          <PersonIcon
                            style={{
                              float: "right",
                              width: "30px",
                              height: " 30px",
                              borderRadius: "50%"
                            }}
                          />
                        )
                      }
                      alt="user icon"
                      style={{
                        float: "right",
                        width: "30px",
                        height: " 30px",
                        borderRadius: "50%"
                      }}
                    />
                  ) : (
                    <PersonIcon
                      style={{
                        float: "right",
                        width: "30px",
                        height: " 30px",
                        borderRadius: "50%"
                      }}
                    />
                  )}
                  {m.message}
                </Grid>
              </Grid>
            );
          }
        })
      )}
    </>
  );
};
