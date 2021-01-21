const SetDataReduce = (state = [] , action) => {
    switch (action.type) {
      case "SET":
        return (state = action.value)
      default:
        return [];
    }
  };
  
  export default SetDataReduce;
  