export default (state = {status: null, user: null}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {...state, status: action.payload.status, user: {username: action.payload.username}}
    case "LOGOUT":
      return {...state, status: null, user: null}
    case "USERINFO":
      return {...state, user: action.payload}
    default:
      return state
  }
}
