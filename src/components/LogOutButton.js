import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/userActions'

function LogOutButton(props) {

  const handleLogOut = () => {
    props.logOut()
  }

  return (
    <div>
      <button
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(LogOutButton)
