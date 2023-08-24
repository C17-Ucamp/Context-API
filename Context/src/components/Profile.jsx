import React, { useContext } from 'react'
import { UserContex } from '../context/UserContext'

const Profile = () => {
    const {userData} = useContext(UserContex)
  return (
    <div>
      {
      userData ? 
      (
        <div>
            <h1>Bienvenid@</h1>
            <h1>{userData.name}</h1>
        </div>
      ): (
        <h1>No estas logueade</h1>
      )
      }
    </div>
  )
}

export default Profile
