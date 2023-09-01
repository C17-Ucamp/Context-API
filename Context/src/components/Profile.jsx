import React, { useContext } from 'react'
import { UserContex } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import CheckOutPage from './Checkout/CheckOutPage'

const Profile = () => {
   const navigation = useNavigate()

    const {userData} = useContext(UserContex)

    const handleChangePassword = () =>{
    navigation('/changePassword')
    }

  return (
    <div>
      {
      userData ? 
      (
        <div>
            <h1>Bienvenid@</h1>
            <h1>{userData.name}</h1>
         <CheckOutPage />
            <button onClick={handleChangePassword}>Cambiar contraseña</button>
            
        </div>
      ): (
        <h1>No estas logueade</h1>
      )
      }
    </div>
  )
}

export default Profile
