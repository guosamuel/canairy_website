export default (state = {user: null}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {user: action.payload}
    case "LOGOUT":
      return {user: null}
    default:
      return state
  }
}
