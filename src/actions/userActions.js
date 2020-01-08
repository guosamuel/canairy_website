export const logIn = () => {
  return {
    type: "LOGIN",
    payload: 200
  }
}

export const logOut = () => {
  return {
    type: "LOGOUT"
  }
}

export const userInfo = info => {
  return {
    type: "USERINFO",
    payload: info
  }
}
