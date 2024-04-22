import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './AppRoute.tsx'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import Fallback from './pages/Fallback.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}>
    <Router>
      <AppRoute />

    </Router>
    </ErrorBoundary>
  </React.StrictMode>
)
