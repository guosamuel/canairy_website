import React, { useState } from 'react'

function LogInForm() {
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
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          />
        <br />
        <button
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default LogInForm
