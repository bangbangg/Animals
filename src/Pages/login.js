import React, {useState,useCallback} from 'react'
import {useDispatch,useSelector} from 'react-redux';

import {auth,showAlert} from "../Actions/Actions";
import {Alert} from "../Helpers/Alert"






export const Login = () => {



  const valid_user = [{login:"foo", password:"fooo"},{login:'Admin', password:'Qwerty!123'}]

  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onPassword = useCallback(ev=>setPassword(ev.target.value),[])
  const onLogin = useCallback(ev=>setLogin(ev.target.value),[])


  const log = useSelector(state=>state.login);
  const pass = useSelector(state=>state.password);
  const alert = useSelector(state=>state.alert)

  let result = valid_user.find(user=> (user.login === log && user.password === pass))
       if (result) {
         localStorage.setItem("authorize" , JSON.stringify ('true')); 
       }


  return (
    <div className = "login_container">
    {alert &&  <Alert/>}
    <form >
      <div className="form-group">
        <label>Login</label>
        <input type="text" className="form-control" onChange = {onLogin}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" className="form-control" onChange = {onPassword}/>
      </div>    
      <button  className="btn btn-primary"  onClick={ev => 
        ev.preventDefault(),         
        ()=>dispatch(showAlert()), 
        ()=>dispatch(auth(login,password))
        }>Confirm</button>
    </form>  
    </div>  
  )
}

