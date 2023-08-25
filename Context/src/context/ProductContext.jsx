import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [formProduct, setFromProduct] = useState({
        name:"",
        description: "",
        price: 0,
        image: ""
    })

    const [products, setProduct] = useState([])

  return (
   <ProductContext.Provider value={{products,setProduct,formProduct,setFromProduct}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductProvider
