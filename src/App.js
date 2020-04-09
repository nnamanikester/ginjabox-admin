import React, { useEffect } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { apiUrl } from "./config";
import axios from "axios";
import { allUsers } from "./Redux/actions/users";

import RoutesWithNavigation from './components/RoutesWithNavigation';
import AuthRoutes from "./components/AuthRoutes";



const App = () => {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const fetchUsers = () => {
    if (localStorage.getItem("token")) {
      axios.get(`${apiUrl}/users`, {
        headers: { "x-admin-auth": localStorage.getItem('token') }
      })
        .then(res => {
          dispatch(allUsers(res.data.data))
        })
        .catch(err => {
          return err;
        })
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <Switch>
      {(!localStorage.getItem('email')) && <AuthRoutes />}
      {(isLogged || localStorage.getItem('email')) && <RoutesWithNavigation />}
    </Switch>
  );
};

export default App;
