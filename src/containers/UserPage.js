import React, { useState, useEffect } from 'react'
import UserPageHeading from '../components/UserPageHeading'
import LogOutButton from '../components/LogOutButton'
import PacmanLoader from 'react-spinners/PacmanLoader'

import { connect } from 'react-redux'
import { userInfo } from '../actions/userActions'

function UserPage(props){
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
    // NEED TO TALK WITH DANIEL HOW THE ENDPOINT WOULD WORK AND HOW THE TOKEN IS GONNA BE GENERATED
    // NEED TO SET THE LOADING TO FALSE IN THE .then()
    // THIS FETCH REQUEST IS WHERE I AM GETTING ALL OF THE USER'S DATA
    // fetch("dev.canairy.ai/user")
    //   .then(resp => resp.json())
    //   .then()
    props.userInfo({firstName: "Asuna", lastName: "Yuuki"})
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

const mapDispatchToProps = dispatch => {
  return {
    userInfo: info => dispatch(userInfo(info))
  }
}

export default connect(null, mapDispatchToProps)(UserPage)
