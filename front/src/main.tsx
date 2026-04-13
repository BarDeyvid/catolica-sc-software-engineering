import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Docs from './Docs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <header className='flex bg-blue-300 p-4 rounded-md justify-around items-center'>
      <Link to="/">
      <h1 className='text-2xl font-bold'>Zorin OS</h1>
      </Link>
      <nav className='flex items-center gap-6 justify-center'>
        
        <h2 className='font-light hover:text-white transition ease-in-out'>Instalação</h2>
        <Link to="/Docs">
        <h2 className='font-light hover:text-white transition ease-in-out'>Documentação</h2>
        </Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
