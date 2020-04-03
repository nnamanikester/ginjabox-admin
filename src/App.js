import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import RoutesWithNavigation from './components/RoutesWithNavigation';
import AuthRoutes from "./components/AuthRoutes";

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Pricing from './components/pages/Pricing';
import Lock from './components/pages/Lock';
import About from './components/pages/About';
import SinglePost from './components/pages/SinglePost';
import PostListing from './components/pages/PostListing';
import Landing from './components/pages/Landing';


const App = () => {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <Switch>
      {!isLogged && <AuthRoutes />}
      {isLogged && <RoutesWithNavigation />}
    </Switch>
  );
};

export default App;
