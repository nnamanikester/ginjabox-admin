export const LogIn = (payload) => {
  return {
    type: "LOGIN",
    payload: payload
  }
}

export const LogOut = () => {
  return {
    type: "LOGOUT"
  }
}