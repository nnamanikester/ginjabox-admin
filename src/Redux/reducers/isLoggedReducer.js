const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return state = true;
    default:
      return state = false;
  }
}

export default isLoggedReducer;