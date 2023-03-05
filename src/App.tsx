import axios from 'axios';
import { useRef, useContext, useState, useCallback, useEffect } from 'react'
import './App.css'
import { Header, Search, Card, Pagination, Footer } from './components';
import { GithubContext } from './context/github-context';

function App() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { githubUsers, setGithubUsers, query, setQuery, page, setPage } = useContext(GithubContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading || !query) return
    setLoading(true)

    const fetchData = async () => {
      const { data } = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=24&page=${page}`);
      setGithubUsers(data)
      setLoading(false)
    }

    fetchData()
  }, [query, page])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPage(1)
    setQuery(searchRef.current?.value)
  }

  const handleClickNext = useCallback(() => {
    if (loading) return
    setPage((prevState) => ++prevState)
  }, [page])

  const handleClickPrevius = useCallback(() => {
    if (loading || page === 1) return
    setPage((prevState) => --prevState)
  }, [page])
  
  return (
    <div className='main'>
      <Header />
      <section>
        <Search disabled={loading} searchRef={searchRef} onSubmit={onSubmit} />
        <div className='cards-wrap'>
          {githubUsers?.items?.map((user) => <Card key={user.login} {...user} />)}
        </div>
        {githubUsers.items && <Pagination total={Math.ceil((githubUsers.total_count / 24))} current={page} onClickNext={handleClickNext} onClickPrevius={handleClickPrevius} />}
      </section>
      <Footer />
    </div>
  )
}

export default App
