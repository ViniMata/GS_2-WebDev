import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import EnergIA from './pages/EnergIA.jsx'
import Servicos from './pages/Servicos.jsx'
import Produtos from './pages/Produtos.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {index: true, element: <Home/>},
      {path: "/servicos", element: <Servicos/>},
      {path:"/contato", element: <Contato/>},
      {path:"/servicos/produtos", element: <Produtos/>},
      {path:"/servicos/energIA", element: <EnergIA/>},
      {path : "*", element:<PageNotFound/> }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
