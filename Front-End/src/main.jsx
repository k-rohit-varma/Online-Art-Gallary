import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter(
//     createRoutesFromElements(

//     )
// )

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
