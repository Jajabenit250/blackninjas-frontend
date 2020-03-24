import axios from "axios";
import { socket } from "./notificationPane";
const GET_PUBLIC_MESSAGES = "GET_PUBLIC_MESSAGES";
const IS_LOADER = "IS_LOADER";
const GET_USERS_INFO = "GET_USERS_INFO";
export const getPublicMessages = (limit, page) => async dispatch => {
  const headers = {
    "Content-type": "application/json",
    token: `Bearer ${localStorage.getItem("token")}`
  };
  dispatch({
    type: IS_LOADER
  });
  const publicMessages = await axios.get(
    `${process.env.BACKEND_BASE_URL}/api/v1/messages?limit=${limit}&page=${page}`,
    { headers }
  );

  dispatch(
    !publicMessages
      ? {
          type: IS_LOADER
        }
      : {
          type: GET_PUBLIC_MESSAGES,
          payload: publicMessages.data.data
        }
  );
};

export const sendMessage = (
  { senderId, receiverId, message },
  limit,
  page
) => dispatch => {
  socket.emit("send_message", {
    senderId,
    receiverId,
    message
  });
  dispatch(getPublicMessages(limit, page));
};
export const receiveMessage = () => dispatch => {
  socket.on("receive_message", data => {
    console.log("dataß", data);
    dispatch({
      type: "RECEIVE",
      count: 0,
      payload: data
    });
  });
};
export const getUsersInfo = () => async dispatch => {
  const headers = {
    "Content-type": "application/json",
    token: `Bearer ${localStorage.getItem("token")}`
  };
  const usersInfo = await axios.get(
    `${process.env.BACKEND_BASE_URL}/api/v1/users/messages`,
    { headers }
  );
  dispatch({
    type: GET_USERS_INFO,
    payload: usersInfo.data.data
  });
};
