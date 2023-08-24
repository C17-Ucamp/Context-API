import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { ColorContext } from '../context/ColorContext'
import Boton from './Boton'

// const Page2 = ({data}) => {
//   return (
//     <div>
//       <h1>Pagina 2</h1>
//       {JSON.stringify(data)}
//     </div>
//   )
// }

const Page2 = () => {
    const {data} = useContext(DataContext)

    const {color, changeColor} = useContext(ColorContext)

    const handleChangecolor = () =>{
        const newColor = color === 'green' ? 'blue' : 'green'
        changeColor(newColor)
    }

    return (
      <div style={{backgroundColor: color}}>
        <h1>Pagina 2</h1>
        {JSON.stringify(data)}
        {/* <button>Cambiar color</button> */}
        <Boton />
      </div>
    )

  }
export default Page2
