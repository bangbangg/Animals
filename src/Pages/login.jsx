import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth, showAlert, loginUser } from '../Actions/Actions';
import { Alert } from '../Components/Alert';

export const Login = () => {

  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const onPassword = useCallback((ev) => setPassword(ev.target.value), []);
  const onLogin = useCallback((ev) => setLogin(ev.target.value), []);

  const alert = useSelector((state) => state.alert);
  const authed = useSelector((state) => state.isaut);
  
  function Log() {
    if (authed === true) {
      localStorage.setItem('authorize', JSON.stringify(true)); 
    }
  }

  return (
    <div className = "login_container">
      {alert && <Alert />}
      <form >
        <div className="form-group">
          <label>Login</label>
          <input type="text" className="form-control" onChange={onLogin} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="text" className="form-control" onChange={onPassword} />
        </div>
        <button className="btn btn-primary" onClick={(ev) =>
        { 
          ev.preventDefault();
          dispatch(showAlert());
          dispatch(auth(login, password));
          dispatch(loginUser());
          Log();
        }}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};
