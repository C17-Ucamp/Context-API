import React, { useContext, useState } from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import { DataContext, DataProvider } from './context/DataContext'
import { ColorProvider } from './context/ColorContext'
const App = () => {

  // const Datos = {
  //   nombre: "Mariana",
  //   edad: 25,
  //   musica: "jazz"
  // }

  // const [data, setData] = useState(Datos)

  

  return (
    <div>
      Hola, esto es mi pagina principal

      {/* <Page1  data={data}/>
      <Page2 data={data} /> */}
 <DataProvider >
  <ColorProvider >
  <Page1 />
  <Page2 />
  </ColorProvider>
 </DataProvider>
     
    </div>
  )
}

export default App

