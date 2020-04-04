const staff = [
  {
    id: 1,
    firstName: "John",
    lastName: "Kester",
    phoneNumber: "0804435243",
    email: 'email@email.com',
    adminAuth: {
      id: 1,
      password: "123456"
    },
    role: {
      id: 1,
      name: "Super Admin"
    }
  }
];

const authenticate = (email, password) => {
  email = email.toLowerCase();
  let bool = false;
  staff.map(st => {
    if (st.email === email) {
      if (st.adminAuth.password === password) {
        bool = true;
      } else {
        bool = false;
      }
    } else {
      bool = false;
    }
    return bool;
  })
  return bool;
}

const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      const { email, password } = action.payload;
      return state = authenticate(email, password);
    default:
      return state = false;
  }
}

export default isLoggedReducer;