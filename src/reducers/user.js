const UserStatus = (state = false, action) => {
    switch (action.type) {
      case "LOGINSUC":
        return state = true;
  
      case "LOGOUTSUC":
        return state = false;
      default:
        return state;
    }
  };
  
  export default UserStatus;
  