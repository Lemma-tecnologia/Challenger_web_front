import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



  
  const router = createBrowserRouter([
    {
      //Elemento Pai
      path:'/',element:<App/>,

  
      //Elemento Filho
      children:[
        {path:'/', element:<Home/>},
        // {path:'/Circuitos', element:<Circuitos/>},
        // {path:'/Desenvolvedores', element:<Desenvolvedores/>},
        // {path:'/Login', element:<Login/>},
        // {path:'/Sobre', element:<Sobre/>},
      ]
  
    }
  ])
  
  
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
