
import {LOGIN_INFO,HIDE_ALERT,SHOW_ALERT,AUTH} from "./types"

export function auth(login,password) {
  return {
    type: LOGIN_INFO,
    login: login,
    password: password,
  }
}


export function showAlert() {
 return dispatch => {
   dispatch ({
     type: SHOW_ALERT,
   })

   setTimeout(()=> {
     dispatch(hideAlert())
   },2000)
 }
}

export function hideAlert() {
  return{
    type:HIDE_ALERT,
  }
}

export function loginn() {
  return{
    type:AUTH,
  }
}






