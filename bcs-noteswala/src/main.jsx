import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'

const router = createBrowserRouter([
  { path: '', element: <Signup /> },
  { path: '/login', element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
