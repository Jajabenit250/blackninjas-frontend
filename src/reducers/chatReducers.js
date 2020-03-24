import { receiveMessage } from "../actions/chatAction";

const chatReducer = (
  state = {
    isLoading: false,
    publicMessages: {},
    allUsersInfo: [],
    receivedMessages: { count: 0, data: {} }
  },
  action
) => {
  switch (action.type) {
    case "IS_LOADER":
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case "GET_PUBLIC_MESSAGES":
      return {
        ...state,
        publicMessages: action.payload
      };
    case "GET_USERS_INFO":
      return {
        ...state,
        allUsersInfo: action.payload
      };
    case "RECEIVE":
      return {
        ...state,
        receivedMessages: {
          count: state.receivedMessages.count + 1,
          data: action.payload
        }
      };

    default:
      return state;
  }
};

export default chatReducer;
