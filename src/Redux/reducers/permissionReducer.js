const permissionReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PERMISSION":
      const permit = {
        superAdmin: localStorage.getItem("roleId") == 1,
        management: localStorage.getItem("roleId") <= 2,
        teamLead: localStorage.getItem("roleId") <= 3,
        support: localStorage.getItem("roleId") <= 4,
      };
      return state = permit;
    default:
      return state;
  }
}

export default permissionReducer;