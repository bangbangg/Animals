import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from '../Actions/Actions';

export const NavibarLog = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  function todayLink() {
    history.push('/');
  }

  function animalsLink() {
    history.push('/animals');
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button className="btn btn-outline-success my-2 my-sm-0"
              onClick={ev => {
                ev.preventDefault();
                dispatch(logOut());
                localStorage.removeItem('state');
              }}
            >
              LogOut
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={(ev) => {
                ev.preventDefault();
                todayLink();
              }}
            >
              Today
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={(ev) => {
                ev.preventDefault();
                animalsLink();
              }}
            >
              Animals
            </button>
          </li>
        </ul>
      </form>
    </nav>
  );
};
