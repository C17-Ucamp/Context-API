import React, { useContext, useState } from 'react'
import { UserContex } from '../context/UserContext'
import axios from 'axios'

const ChangePassword = () => {
    
 const {userData,setUserData} = useContext(UserContex)
 const url = "http://localhost:5003/api/v1/pass/change"

 const token = userData.token
 const oldPassword = userData.oldPassword
 const newPassword = userData.newPassword

 const [errorPassword, setErrorPassword]= useState("")
 const[passwordSuccess, setPasswordSuccess] = useState("")

 const changePassword = async() =>{
   try {
       const response = await axios.put(url,{
           oldPassword: oldPassword,
           newPassword: newPassword
       }, {
           headers: {
               Authorization: `Bearer ${token}`
           }
          
       })
   
       if(response.status === 200){
           console.log("Password change succesfully!")
           setPasswordSuccess("Contraseña cambiada!")
       } else {
           console.log("Algo paso")
           setErrorPassword('Algo sucedió, algo es incorrecto')
       }
   
   } catch(error){
    console.log(error)
   }
 }
 

 const handleChange = (e) =>{
    const {name, value} = e.target
    setUserData({
        ...userData,
        [name]: value
    })
    console.log(userData)
 }


  return (
    <div>
        {/* <input type="text" placeholder='email' name='email' onChange={handleChange}/> */}
        <input type="text" placeholder='password actual' name='oldPassword'  onChange={handleChange}/>
        {errorPassword && <span className='error'>{errorPassword}</span>}
        <input type="text" placeholder='nuevo password' name='newPassword' onChange={handleChange}/>
        {errorPassword && <span className='error'>{errorPassword}</span>}
        <button onClick={() => changePassword()}>Enviar</button>
        {passwordSuccess && <span className='succes'>{passwordSuccess}</span>}
      
    </div>
  )
}

export default ChangePassword
