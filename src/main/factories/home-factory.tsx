import React from 'react'
import { GithubSearch } from '../../data/usecases/github-search'
import { AxiosAdapter } from '../../infra/axios-adapter/axios-adapter'
import Home from '../../presentation/pages/home/home'

const HomeFactory: React.FC = () => {
  const search = new GithubSearch(new AxiosAdapter())

  return (
    <Home search={search} />
  )
}

export default HomeFactory