import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GithubProvider from './context/github-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
)
