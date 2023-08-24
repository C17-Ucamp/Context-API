import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Boton = () => {

    const NewDatos = {
        nombre:"Paola",
        edad: 35,
        musica: "Pop"
    }

    const {setData} = useContext(DataContext)

  return (
    <div>
      <button onClick={() => setData(NewDatos)}>Cambiar</button>
    </div>
  )
}

export default Boton
