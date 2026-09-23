import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // 👈 HashRouter इंपोर्ट करा
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* 👈 BrowserRouter ऐवजी HashRouter वापरा */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
