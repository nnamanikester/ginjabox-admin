import { apiUrl } from "../../config";
import axios from "axios";

const getUserRoleId = async () => {
  const data = { email: localStorage.getItem('email') };
  axios.post(`${apiUrl}/permission`, data)
    .then(res => {
      console.log(res.data);
      return res.data.roleId
    })
    .catch(err => {
      console.log(err);
    })
}

const permissionReducer = (state = 0, action) => {
  switch (action.type) {
    case "GET_PERMISSION":
      const id = getUserRoleId();
      if (id === 1) return state = 1;
      if (id === 2) return state = 2;
      if (id === 3) return state = 3;
      if (id === 4) return state = 4;
      return state;
    default:
      return state;
  }
}

export default permissionReducer;