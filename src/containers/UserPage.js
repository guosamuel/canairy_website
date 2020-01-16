import React, { useState, useEffect } from 'react'
import UserPageHeading from '../components/UserPageHeading'
import LogOutButton from '../components/LogOutButton'
import PacmanLoader from 'react-spinners/PacmanLoader'
import CoughDetectedChart from '../components/CoughDetectedChart'
import CharacteristicsChart from '../components/CharacteristicsChart'
import SeverityCharts from '../components/SeverityCharts'

import { connect } from 'react-redux'
import { userInfo } from '../actions/userActions'

function UserPage(props){
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    // setTimeout(() => setLoading(false), 2000)
    // NEED TO TALK WITH DANIEL HOW THE ENDPOINT WOULD WORK AND HOW THE TOKEN IS GONNA BE GENERATED
    // NEED TO SET THE LOADING TO FALSE IN THE .then()
    // THIS FETCH REQUEST IS WHERE I AM GETTING ALL OF THE USER'S DATA
    fetch("http://localhost:8080/users", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: props.username
      })
    })
    .then(resp => resp.json())
    .then(data => {
      // the props.userInfo will be here when the api is able to properly communicate
      // with the databse. For the time being, continue using the dummy data
      setLoading(false)
    })
    .catch(error => alert(error))
    props.userInfo({firstName: "Asuna", lastName: "Yuuki"})
  }, [])

  return (
    <div>
      {loading ?
        <PacmanLoader loading={loading} /> :
        <React.Fragment>
          <UserPageHeading />
          <CoughDetectedChart />
          <CharacteristicsChart />
          <SeverityCharts />
          <LogOutButton />
        </React.Fragment>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userInfo: info => dispatch(userInfo(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
