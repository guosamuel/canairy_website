import React from 'react'
import UserPageHeading from '../components/UserPageHeading'
import LogOutButton from '../components/LogOutButton'

function UserPage(props){
  return (
    <div>
      <UserPageHeading />
      <LogOutButton />
    </div>
  )
}

export default UserPage
