const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      const { email, token, roleId } = action.payload;
      if (!token) return state = false;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("roleId", roleId);
      return state = true;
    case "LOGOUT":
      return state = false;
    default:
      return state = false;
  }
}

export default isLoggedReducer;