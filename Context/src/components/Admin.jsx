import React, { useContext, useEffect } from 'react'
import { UserContex } from '../context/UserContext'
import { ProductContext } from '../context/ProductContext'
import axios from 'axios'

const Admin = () => {
    //Usuario: admin
    const {userData} = useContext(UserContex)

    //Productos
    const {products,setProduct,formProduct,setFromProduct} = useContext(ProductContext)

    //--- Obtener productos
    const getProducts = async() =>{
     const url = "http://localhost:5003/api/v1/products"
     const response = await axios.get(url)
     console.log(response)
     setProduct(response.data)
    }

    //--- Publicar Productos
    const PostProducts = async() =>{
        const productData = {
            name: formProduct.name,
            description: formProduct.description,
            price: formProduct.price,
            image: formProduct.image
        }

       const url = "http://localhost:5003/api/v1/products" 
       const response = await axios.post(url, productData)
       console.log(response)
       getProducts()
    }

    //---Editar productos
    const Editproducts = async(id) =>{
        const url = `http://localhost:5003/api/v1/products/${id}`;

        const response = await axios.get(url)
        const productEdit = response.data

        setFromProduct({
            name: productEdit.name,
            description: productEdit.description,
            price: productEdit.price,
            image: productEdit.image
        })

         const newProductEdit = {
            name: formProduct.name,
            description: formProduct.description,
            price: formProduct.price,
            image: formProduct.image
         }
 

         axios.put(url, newProductEdit);
         getProducts()
    }

    const delteProduct = async(id) =>{
        const url = `http://localhost:5003/api/v1/products/${id}`;
        const response = await axios.delete(url)
        console.log(response)
        getProducts()
    }

     console.log("Aqui form product",formProduct)

     useEffect(()=>{
        getProducts()
     }, [])

  return (
    <div>
      {
        userData ? (
            <div>
                <h1>Hola Admin!</h1>
                <h2>{userData.name}</h2>
                
        <form>
            <input type="text" placeholder='name' name="name" value={formProduct.name} onChange={(e) => setFromProduct({...formProduct, name: e.target.value})}/>
            <input type="text" placeholder='description' name="description" value={formProduct.description}  onChange={(e) => setFromProduct({...formProduct, description: e.target.value})}/>
            <input type="number" placeholder='price' name="price" value={formProduct.price} onChange={(e) => setFromProduct({...formProduct, price: e.target.value})}/>
            <input type="text" placeholder='image' name="image" value={formProduct.image} onChange={(e) => setFromProduct({...formProduct, image: e.target.value})} />
            <button onClick={() => PostProducts()}>Enviar</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Description</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                </tr>
            </thead>

            {products.map(producto =>(

                <tbody key={producto._id}>
                    <tr>
                        <td>{producto.name}</td>
                        <td>{producto.description}</td>
                        <td>{producto.price}</td>
                        <img src={producto.image} style={{width: "2rem"}} />
                        <td>
                            <button onClick={()=> delteProduct(producto._id)}>Borrar</button>
                            <button onClick={() => Editproducts(producto._id)}>Editar</button>
                        </td>
                    </tr>

                </tbody>
            ))} 
        </table>
            </div>
        ) :(
            <h1> No estas logueade</h1>
        )
      }
    </div>
  )
}

export default Admin
