import { createContext, useState } from "react";

export const UserContex = createContext()

export const UserProvider = ({children}) =>{
    const [userData, setUserData] = useState({})

    return(
        <UserContex.Provider value={{userData,setUserData}}>
            {children}
        </UserContex.Provider>
    )
}