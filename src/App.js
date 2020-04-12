import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { useSelector } from "react-redux";

import RoutesWithNavigation from './components/RoutesWithNavigation';
import AuthRoutes from "./components/AuthRoutes";


const App = () => {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <Switch>
      {(!localStorage.getItem('email')) && <AuthRoutes />}
      {(isLogged || localStorage.getItem('email')) && <RoutesWithNavigation />}
    </Switch>
  );
};

export default App;
