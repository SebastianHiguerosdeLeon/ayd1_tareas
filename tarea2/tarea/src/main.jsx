import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Tarea from './components/info';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarea />
  </StrictMode>,
)
