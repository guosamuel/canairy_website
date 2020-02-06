export const logIn = username => {
  return {
    type: "LOGIN",
    payload: {status: 200, username: username}
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
