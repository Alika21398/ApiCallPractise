import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:'/user',
        element: <User/>
      }
    ]

  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
   
  </StrictMode>,
)
