import React, { useState, useEffect } from 'react'
import UserPageHeading from '../components/UserPageHeading'
import LogOutButton from '../components/LogOutButton'
import PacmanLoader from 'react-spinners/PacmanLoader'

function UserPage(props){
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
    // NEED TO TALK WITH DANIEL HOW THE ENDPOINT WOULD WORK AND HOW THE TOKEN IS GONNA BE GENERATED
    // NEED TO SET THE LOADING TO FALSE IN THE .then()
    // fetch("dev.canairy.ai/user")
    //   .then(resp => resp.json())
    //   .then()
  }, [])

  return (
    <div>
      {loading ?
        <PacmanLoader loading={loading} /> :
        <React.Fragment>
          <UserPageHeading />
          <LogOutButton />
        </React.Fragment>
      }
    </div>
  )
}

export default UserPage
