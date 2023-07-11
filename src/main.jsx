import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mani from './Layout/Mani';
import Home from './components/Home/Home';
import About from './components/About/About';
import Instructors from './components/Instructors/Instructors';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mani />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
