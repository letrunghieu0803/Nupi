const LevelNow = (state = 1, action) => {
    switch (action.type) {
      case "INCRE":
        return state + 1;
  
      case "SET":
        return state = 1;
      default:
        return state;
    }
  };
  
  export default LevelNow;
  