// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 👈 हे नवीन जोडले आहे
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* 👈 App ला याच्या आत रॅप केले */}
      <App />
    </BrowserRouter> {/* 👈 */}
  </StrictMode>,
)
