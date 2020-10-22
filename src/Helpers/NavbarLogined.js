import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {logOut} from "../Actions/Actions"


export const NavibarLog = () => {

  const dispatch = useDispatch();
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
          <button className="btn btn-primary" onClick = {ev=> {
             ev.preventDefault()
             dispatch(logOut())
           }}>LogOut</button>
        </li>
        <li className="nav-item">
           <button className="btn btn-primary" onClick = {ev=> {
             ev.preventDefault()
             Today_Link()
           }}>Today</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary" onClick ={ev=> {
             ev.preventDefault()
             Animals_Link()
           }}>Animals</button>
        </li>
      </ul>
      </form>
    </nav> 
  )
}
