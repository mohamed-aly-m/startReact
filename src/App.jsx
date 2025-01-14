

import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import About from './About/About'
import './App.css'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Portfolio from './Portfolio/Portfolio'
import Layout from './Layout/Layout'
import NotFound from './NotFound/NotFound'


function App() {
  
  const router = createHashRouter([
    {
         path: "", element: <Layout />, children:[
        { path: "", element: <Home />},
        { path: "home", element: <Navigate to={"/"} />},
        { path: "portfolio", element: <Portfolio />},
        { path: "about", element: <About />},
        { path: "contact", element: <Contact />},
        { path: "*", element: <NotFound />},
      ]
    }
  ])
  return (
    <>
      
      
      <RouterProvider router={router} />
      
      
     
    </>
  )
}

export default App
