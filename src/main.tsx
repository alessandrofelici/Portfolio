import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import { Socials } from './components/Socials'
import './index.css'

// No router: the site has one extra page, and a path check covers it.
const isSocials = window.location.pathname.replace(/\/+$/, '') === '/socials'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isSocials ? <Socials /> : <App />}
    <Analytics />
  </React.StrictMode>,
)
