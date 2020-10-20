import { LOGIN_INFO} from "./types"

export function auth(login,password) {
  return {
    type: LOGIN_INFO,
    login: login,
    password: password,
  }
}




