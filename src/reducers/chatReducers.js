const chatReducer = (
  state = { isLoading: false, publicMessages: {} },
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

    default:
      return state;
  }
};

export default chatReducer;
