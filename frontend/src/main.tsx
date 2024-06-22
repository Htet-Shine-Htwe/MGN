import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './route/appRoute.tsx'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import Fallback from './pages/Fallback.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}>
      <Provider store={store}>

        <Router>
          <AppRoute />

        </Router>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
