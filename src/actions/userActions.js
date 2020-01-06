export const logIn = () => {
  return {
    type: "LOGIN",
    payload: {firstName: "Asuna", lastName: "Yuuki"}
  }
}

export const logOut = () => {
  return {
    type: "LOGOUT"
  }
}
