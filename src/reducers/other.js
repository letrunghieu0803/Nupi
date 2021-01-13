const OtherReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCRE":
      return state + 1;

    case "DESCRE":
      return state - 1;
    default:
      return state;
  }
};

export default OtherReducer;
