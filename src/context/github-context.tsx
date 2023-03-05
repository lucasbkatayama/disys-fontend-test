import React, { ReactNode, useState } from 'react'
import MOCK_USERS from './mock-data.json'

export const GithubContext = React.createContext<Context>({} as Context)

interface Item {
  login: string
  avatar_url: string
  html_url: string
}

export interface GithubUsers {
  total_count: number
  items: Item[]
}

interface Context {
  githubUsers: GithubUsers
  setGithubUsers: React.Dispatch<React.SetStateAction<GithubUsers>>
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
  query: string | undefined
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

type PropsTypes = {
  children: ReactNode
}

const GithubProvider:React.FC<PropsTypes> = (props: PropsTypes) => {
  const { children } = props

  const [githubUsers, setGithubUsers] = useState<GithubUsers>({} as GithubUsers)
  const [query, setQuery] = useState<string | undefined>()
  const [page, setPage] = useState<number>(1)

  return (
    <GithubContext.Provider value={{githubUsers, setGithubUsers, setQuery, query, page, setPage}}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
