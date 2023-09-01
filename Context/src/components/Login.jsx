import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContex } from '../context/UserContext'
import axios from 'axios'

const Login = () => {


    const url = 'http://localhost:5003/api/v1/auth/login'
    const url2 = 'http://localhost:5003/api/v1/users/me'
    const url3 = 'http://localhost:5003/api/v1/admin/yo'
    const navigation = useNavigate()


 const {userData, setUserData} = useContext(UserContex)

    const handleSubmit = () =>{
        console.log(userData)
        axios.post(url, userData)
        
        .then(res =>{
         console.log(res.data)
         const {token, role} = res.data;
         const isAdmin = role === 'admin'

         return(
            axios.get( isAdmin ? url3 : url2,{
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    Authorization : `Bearer ${res.data.token}`
                }
            }).then(response =>{
                console.log(response.data)
                const {username, email,name} = response.data
                const userupdateData = {token, username, email,name}

                setUserData(userupdateData);
                if(isAdmin){
                  navigation('/admin')
                } else {
                  navigation('/profile')
                }
              
            })
         )
        })
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
      Login
      <input type="text" placeholder='Correo' name='email' onChange={handleChange}/>
      <input type="text" placeholder='Contraseña' name='password' onChange={handleChange}/>
      <button onClick={()=> handleSubmit()}>Enviar</button>
    </div>
  )
}

export default Login
