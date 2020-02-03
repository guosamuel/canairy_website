import React, { useState } from 'react'

import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'

function LogInForm(props) {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ correctLogIn, setCorrectLogIn ] = useState(true)

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const clearLogInForm = () => {
    setUsername("")
    setPassword("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log("derp")
    // NEED TO TALK WITH DANIEL HOW THE ENDPOINT WOULD WORK AND HOW THE TOKEN IS GONNA BE GENERATED
    // NEED TO CHANGE URL TO WHATEVER THE END POINT WILL BE
    // THIS SHALL ONLY BE FETCHING THE 200 MESSAGE, NOT ANYTHING ELSE
    fetch("http://localhost:8080/uauth", {
      method: "GET",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.stringify({
          username: username,
          password: password
        })
      },
    })
    .then(resp => {
      if (resp.status === 401) {
        setCorrectLogIn(false)
        clearLogInForm()
      } else if ( resp.status === 200 ) {
        props.logIn(username)
      }
    })
    .catch(error => alert(error))

    // this is just a dummy test. Will need to fix this logic up along with the redux state to make it flow better
    // props.logIn()
    // if(!props.status) {
    //   setCorrectLogIn(false)
    // }
  }

  return (
    <div>
      <h2>{correctLogIn ? null : "Incorrect username or password."}</h2>
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


const mapStateToProps = state => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (username) => dispatch(logIn(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)
