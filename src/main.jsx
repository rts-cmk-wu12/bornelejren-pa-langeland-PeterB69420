import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Index from './pages/Index'
import Omos from './pages/Omos'
import Registration from './pages/Registration'
import Overview from './pages/Overview'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/omos" element={<Omos />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
