import {LOGIN_INFO} from "../Actions/types"

const initialState = {
  animals: [],
  today_animals:[],
  login: "",
  password: "",
}

export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_INFO:
      return {...state, login: action.login, password: action.password}
    default : return state
  }
}