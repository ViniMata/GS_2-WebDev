import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Produtos from './pages/Produtos.jsx'
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {index: true, element: <Home/>},
      {path:"/produtos", element: <Produtos/>},
      {path:"/contato", element: <Contato/>}
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
