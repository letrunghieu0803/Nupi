const ChangeViewReducer = (state = "home", action) => {
  switch (action.type) {
    case "HOME":
      return (state = "home");

    case "PLAY":
      return (state = "play");

    case "BXH":
      return (state = "bxh");
    case "HIS":
      return (state = "history");
    case "LIB":
      return (state = "library");
    case "S1":
      return (state = "stage1");
    case "S2":
      return (state = "stage2");
    default:
      return "stage1";
  }
};

export default ChangeViewReducer;
