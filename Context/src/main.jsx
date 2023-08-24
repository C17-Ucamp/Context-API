import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login.jsx'
import { UserProvider } from './context/UserContext.jsx'
import Profile from './components/Profile.jsx'

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
    element: <UserProvider><Profile /></UserProvider>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
