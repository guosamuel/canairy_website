import React, { useState } from 'react'

function LogInForm() {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form>
        <label>Username</label>
        <br />
        <input
          value={username}
          onChange={handleUsername}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          value={password}
          onChange={handlePassword}
          />
        <br />
        <button>Log In</button>
      </form>
    </div>
  )
}

export default LogInForm
