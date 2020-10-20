import React, {useState,useCallback} from 'react'
import {useDispatch,useSelector} from 'react-redux';

import {auth} from "../Actions/Actions";



export const Login = () => {

  const valid_user = [{login:"foo", password:"fooo"},{login:'Admin', password:'Qwerty!123'}]

  const dispatch = useDispatch();


  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onPassword = useCallback(ev=>setPassword(ev.target.value),[])
  const onLogin = useCallback(ev=>setLogin(ev.target.value),[])


  const log = useSelector(state=>state.login);
  const pass = useSelector(state=>state.password);
 
  let result = valid_user.find(user=> (user.login === log && user.password === pass))
       result ? localStorage.setItem("authorize" , JSON.stringify ('true')) :
      localStorage.setItem("authorize" , JSON.stringify ('false')) ; 
      
    
  
  

  


  return (
    <div className = "login_container">
    <form>
      <div className="form-group">
        <label>Login</label>
        <input type="text" className="form-control" onChange = {onLogin}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" className="form-control" onChange = {onPassword}/>
      </div>    
      <button type="submit" className="btn btn-primary" onClick={()=>dispatch(auth(login,password))}>Submit</button>
    </form>  
    </div>  
  )
}

