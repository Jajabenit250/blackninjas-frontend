const tripStatisticsReducer = (
  state = { isLoading: false, publicMessages: {} },
  action
) => {
  switch (action.type) {
    case "IS_LOADER":
      return {
        ...state,
        isLoading: !isLoading
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

export default tripStatisticsReducer;
