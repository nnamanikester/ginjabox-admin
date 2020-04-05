const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      const { email, firstName, lastName } = action.payload;
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      return state = true;
    default:
      return state = false;
  }
}

export default isLoggedReducer;