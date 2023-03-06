import React, { ReactNode, useState } from 'react'
import { SearchResponse } from '../../domain/usecases'

export const GithubContext = React.createContext<Context>({} as Context)

interface Context {
  searchResponse: SearchResponse
  setSearchResponse: React.Dispatch<React.SetStateAction<SearchResponse>>
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

  const [searchResponse, setSearchResponse] = useState<SearchResponse>({} as SearchResponse)
  const [query, setQuery] = useState<string | undefined>()
  const [page, setPage] = useState<number>(1)

  return (
    <GithubContext.Provider value={{searchResponse, setSearchResponse, setQuery, query, page, setPage}}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
