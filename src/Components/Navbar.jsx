import React from 'react';
import { useHistory } from 'react-router-dom';

export const Navibar = () => {

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
            <button className="btn btn-primary" href="#">Login</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={todayLink}>Today</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={animalsLink}>Animals</button>
          </li>
        </ul>
      </form>
    </nav>
  );
};
