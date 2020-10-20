import React from 'react';
import {useHistory} from 'react-router-dom';


export const Navibar = () => {

  const history = useHistory();

  function Today_Link() {
    history.push("/");
  } 

  function Animals_Link() {
    history.push("/animals");
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <ul className="nav nav-pills">
        <li className="nav-item">
          <button className="btn btn-primary" href="#">Login</button>
        </li>
        <li className="nav-item">
           <button className="btn btn-primary" onClick = {Today_Link}>Today</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary" onClick = {Animals_Link}>Animals</button>
        </li>
      </ul>
      </form>
    </nav> 
  )
}
