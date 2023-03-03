import React, { ReactNode, useState } from 'react'
import MOCK_USERS from './mock-data.json'

export const GithubContext = React.createContext<GithubUser>({} as GithubUser)

interface Item {
  login: string
  avatar_url: string
  html_url: string
}

export interface GithubUser {
  total_count: number
  items: Item[]
}

type PropsTypes = {
  children: ReactNode
}

const GithubProvider:React.FC<PropsTypes> = (props: PropsTypes) => {
  const { children } = props

  const [githubUsers, setGithubUser] = useState<GithubUser>(MOCK_USERS)

  return (
    <GithubContext.Provider value={githubUsers}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
