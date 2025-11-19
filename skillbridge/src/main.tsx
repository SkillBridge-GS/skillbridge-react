import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom' 
import App from './App.tsx'

// Importação das Páginas
import Home from './routes/Home/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx' 
import Login from './routes/Login/index.tsx' 
import Cadastro from './routes/Cadastro/index.tsx' 
import Error404 from './routes/Error404/index.tsx' 
import Perfil from './routes/Perfil/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
    errorElement: <Error404/>, 
    children: [ 
      {
        path: "/",
        element: <Home/>, 
      },
      {
        path: "/integrantes",
        element: <Integrantes/>, 
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/cadastro",
        element: <Cadastro/>,
      },
      {
        path: "/perfil",
        element: <Perfil/>, 
      },
      {
        path: "/old-page",
        element: <Navigate to="/"/>,
      },
    ]
  },
  {
      path: "*",
      element: <Error404/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} /> 
    </ThemeProvider>
  </React.StrictMode>,
)