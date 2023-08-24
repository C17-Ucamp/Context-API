import { createContext, useState } from "react";

export const ColorContext = createContext()

export const ColorProvider = ({children}) =>{
    const[color, setColor] = useState('green')

    const changeColor = (newColor) =>{
        setColor(newColor)
    }

    return (
        <ColorContext.Provider value={{color, changeColor}}>
        {children}
        </ColorContext.Provider>
    )
}