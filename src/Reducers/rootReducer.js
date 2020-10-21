import {LOGIN_INFO,HIDE_ALERT,SHOW_ALERT,AUTHORIZE,LOGOUT} from "../Actions/types"

const initialState = {
  animals: [
    {id:"1",type:"cat", breed:"siamese", nickname:"Tinky", appointment: "injection",medicine:"tablet",
    date:"2020-10-21", time:"18:45", height:"25cm" , weight:"15kg" , age: "7 y.o"},
    {id:"2",type:"dog", breed:"pitbull", nickname:"Billy", appointment: "operation",medicine:"paracetomol",
    date:"2020-10-21", time:"16:50", height:"15cm" , weight:"15kg" , age: "1 y.o"},
    {id:"3",type:"cat", breed:"paddle-eared", nickname:"Poppy", appointment: "nothing",medicine:"icecream",
    date:"2020-10-22", time:"12:15", height:"35cm" , weight:"5kg" , age: "5 y.o"},
    {id:"4",type:"dog", breed:"dog", nickname:"Dipsy", appointment: "lorem",medicine:"candy",
    date:"2020-10-21", time:"14:45", height:"10cm" , weight:"15kg" , age: "4 y.o"},
    {id:"5",type:"cat", breed:"no-breed", nickname:"Tinker", appointment: "i dont know",medicine:"tablet",
    date:"2020-10-23", time:"13:55", height:"40cm" , weight:"10kg" , age: "12 y.o"},
    {id:"6",type:"dog", breed:"dachshund", nickname:"Мinky", appointment: "who are u",medicine:"varenie",
    date:"2020-10-22", time:"12:10", height:"60cm" , weight:"25kg" , age: "3 y.o"},
  ],
  login: "",
  password: "",
  alert: null,
  isAuthorized: "false",
}

export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_INFO:
      return {...state, login: action.login, password: action.password}
    case SHOW_ALERT:
      return {...state, alert : true}
    case HIDE_ALERT:
      return {...state, alert: null}
    case AUTHORIZE:
      return {...state,isAuthorized: "true"}
    case LOGOUT: 
      return {...state,isAuthorized:"false"}
    default:
      return state
  }
}