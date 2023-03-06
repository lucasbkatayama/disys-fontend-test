import React from 'react'
import ReactDOM from 'react-dom/client'
import GithubProvider from '../presentation/context/github-context'
import '../presentation/styles/vars.css'
import HomeFactory from './factories/home-factory'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GithubProvider>
      <HomeFactory />
    </GithubProvider>
  </React.StrictMode>,
)
