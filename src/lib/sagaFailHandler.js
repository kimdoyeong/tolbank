const sagaFailHandler = (state, action) => {
  return {
    ...state,
    error: action.payload.response
      ? action.payload.response.data.message
      : action.payload.message
  };
};
export default sagaFailHandler;
