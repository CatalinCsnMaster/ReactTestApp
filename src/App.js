import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import Form from './pages/Form'
import Logout from './pages/Logout'

export default function App(){
  localStorage.setItem('is_logged_in', false);
  return(
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Router path="/form">
         <Form/>
        </Router>
        <Router path="/logout">
          <Logout/>
        </Router>
      </Switch>
    </Router>
  )
}