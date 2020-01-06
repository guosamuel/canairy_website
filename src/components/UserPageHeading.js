import React from 'react'

import { connect } from 'react-redux'

function UserPageHeading(props){
  return (
    <div>
      <h1>Welcome Back {props.user.firstName} {props.user.lastName}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {user: state.user}
}

export default connect(mapStateToProps)(UserPageHeading)
