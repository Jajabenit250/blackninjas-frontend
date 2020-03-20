import axios from "axios";

const GET_PUBLIC_MESSAGES = "GET_PUBLIC_MESSAGES";
const IS_LOADER = "IS_LOADER";
export const getPublicMessages = () => async dispatch => {
  const headers = {
    "Content-type": "application/json",
    token: `Bearer ${localStorage.getItem("token")}`
  };
  dispatch({
    type: IS_LOADER
  });
  const publicMessages = await axios.get(
    `${process.env.BACKEND_BASE_URL}/api/v1//messages`,
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
