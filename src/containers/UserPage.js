import React, { useEffect } from 'react'
import UserPageHeading from '../components/UserPageHeading'
import LogOutButton from '../components/LogOutButton'

function UserPage(props){

  useEffect(() => {
    console.log("derp")
  }, [])

  return (
    <div>
      <UserPageHeading />
      <LogOutButton />
    </div>
  )
}

export default UserPage
