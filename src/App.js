import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Admin from './Component/admin/Admin';
import Activities from './Component/Activities/Activities';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/home">
        <HomePage/>
      </Route>
      <Route path="/login">
          <LoginPage/>
      </Route>
      <Route path='/admin'>
        <Admin/>
      </Route>
      <Route path="/activities">
        <Activities/>
      </Route>
      <PrivateRoute path="/register">
        <RegisterPage/>
      </PrivateRoute>
      <Route path="*">
        <NotFoundPage/>
      </Route>
    </Switch>
    </Router>    
    </UserContext.Provider>
  );
}

export default App;
