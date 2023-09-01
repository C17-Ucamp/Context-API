import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login.jsx'
import { UserProvider } from './context/UserContext.jsx'
import Profile from './components/Profile.jsx'
import Admin from './components/Admin.jsx'
import ProductProvider from './context/ProductContext.jsx'
import ChangePassword from './components/ChangePassword.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/login',
    element: <UserProvider><Login /></UserProvider>
  },
  {
    path: '/profile',
    element: (<PayPalScriptProvider options={{ "client-id": "ARm7diFz42A9mDQyWkI6yVf4vcZYCHC5fU4c7oEkKaRMckv2wePn2z2XOCWZVJGW296wo8WpEZSgWK-a",
    components: "buttons",
    currency: "USD" }}>
      <UserProvider>
        <Profile />
      </UserProvider>
      </PayPalScriptProvider>
      )
  },
  {
    path: '/admin',
    element: (
    <UserProvider>
    <ProductProvider>
        <Admin />
    </ProductProvider>
    </UserProvider>)
  },
  {
    path: '/changePassword',
    element:(
      <UserProvider>
        <ChangePassword />
      </UserProvider>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
