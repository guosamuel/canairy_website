export default (state = {status: null, user: null}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {...state, status: action.payload}
    case "LOGOUT":
      return {...state, staus: null, user: null}
    default:
      return state
  }
}
