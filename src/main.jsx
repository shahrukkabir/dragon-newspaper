import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import AuthProvider from './Components/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
)
