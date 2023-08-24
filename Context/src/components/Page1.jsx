import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { ColorContext } from '../context/ColorContext'

// const Page1 = ({data}) => {
//   return (
//     <div>
//       <h1>Pagina 1</h1>
//       {JSON.stringify(data)}
//     </div>
//   )
// }

const Page1 = () => {

    const {data} = useContext(DataContext)

    const {color, changeColor} = useContext(ColorContext)

    const handleChangecolor = () =>{
        const newColor = color === 'green' ? 'blue' : 'green'
        changeColor(newColor)
    }

    return (
      <div style={{backgroundColor: color}}>
        <h1>Pagina 1</h1>
        {JSON.stringify(data)}
        <button onClick={handleChangecolor}>Cambiar Color</button>
      </div>
    )
  }

export default Page1
