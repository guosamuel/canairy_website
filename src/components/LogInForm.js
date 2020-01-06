import React, { useState } from 'react'

import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'

function LogInForm(props) {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("derp")
    // NEED TO TALK WITH DANIEL HOW THE ENDPOINT WOULD WORK AND HOW THE TOKEN IS GONNA BE GENERATED
    // NEED TO CHANGE URL TO WHATEVER THE END POINT WILL BE
    // fetch("dev.canairy.ai/login", {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password
    //   })
    // })
    // .then(resp => resp.json())
    // .then()
    props.logIn()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          style={{
            border: '1px solid'
          }}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          style={{
            border: '1px solid'
          }}
          />
        <br />
        <button
          type="submit"
          style={{
            border: '1px solid'
          }}
        >
          Log In
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logIn())
  }
}

export default connect(null, mapDispatchToProps)(LogInForm)
