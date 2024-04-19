import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './AppRoute.tsx'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoute />

    </Router>
  </React.StrictMode>
)
