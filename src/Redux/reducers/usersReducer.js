const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_USERS":
      return state = action.payload;
    default:
      return state;
  }
}

export default userReducer;
