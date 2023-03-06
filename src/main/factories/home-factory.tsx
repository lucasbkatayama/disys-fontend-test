import React from 'react'
import { GithubGetUser, GithubSearch } from '../../data/usecases'
import { AxiosAdapter } from '../../infra/axios-adapter/axios-adapter'
import Home from '../../presentation/pages/home/home'

const HomeFactory: React.FC = () => {
  const axiosAdapter = new AxiosAdapter()
  const search = new GithubSearch(axiosAdapter)
  const getUser = new GithubGetUser(axiosAdapter)

  return (
    <Home search={search} getUser={getUser} />
  )
}

export default HomeFactory