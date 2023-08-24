import { createContext, useState } from "react";


// 1. Primer paso crear el contexto
export const DataContext = createContext()

// 2. Segundo paso proveer del contexto a nuestros elementos hijos
export const DataProvider = ({children}) =>{
    
    const Datos = {
        nombre: "Mariana",
        edad: 25,
        musica: "jazz"
      }
     
      const [data, setData] = useState(Datos)

      return (
        <DataContext.Provider value={{data,setData}}>
        {children}
      </DataContext.Provider>

      )
}

