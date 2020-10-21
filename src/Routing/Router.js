import React from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import {Animals} from "../Pages/animals";
import {Login} from "../Pages/login";
import {Today} from "../Pages/today";
import {Navibar} from "../Helpers/Navbar";
import {NavibarLog} from "../Helpers/NavbarLogined";
import {AnimalInfo} from "../Pages/AnimalInfo"

const GlobalStyle = createGlobalStyle`
*{
  margin:2px;
  padding:0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
`;

export const router = (isAuthorized) => {
 
  if (isAuthorized === "false" || !isAuthorized) {
    return (
        <Router>
        <Navibar/>
        <GlobalStyle/>
        <Switch>
          <Route path="/Home" exact component = {Login} />
          <Redirect to="/Home" />
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
      <NavibarLog/>
      <GlobalStyle/>
      <Switch>
        <Route path="/Home" exact component = {Today} />
        <Route path="/animals" component = {Animals} />
        <Route path = "/animalinfo:id" component={AnimalInfo}/>
        <Redirect to="/Home" />
      </Switch>
      </Router>
    )
  }
}