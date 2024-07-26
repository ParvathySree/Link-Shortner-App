import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LinkContextProvider } from './Context/LinkContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LinkContextProvider>
    <App />
    </LinkContextProvider>
  </React.StrictMode>,
)
