import { useRef, useContext, useState, useCallback, useEffect } from 'react'
import './home.css'
import { Header, SearchBar, Card, Pagination, Footer } from '../../components';
import { GithubContext } from '../../context/github-context';
import { Search } from '../../../domain/usecases';

type Props = {
  search: Search
}

const Home:React.FC<Props> = ({ search }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { searchResponse, setSearchResponse, query, setQuery, page, setPage } = useContext(GithubContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading || !query) return
    setLoading(true)
    const fetchData = async () => {
      try {
        const data = await search.search({ query, page });
        setSearchResponse(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
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
        <SearchBar disabled={loading} searchRef={searchRef} onSubmit={onSubmit} />
        <div className='cards-wrap'>
          {searchResponse?.items?.map((user) => <Card key={user.login} {...user} />)}
        </div>
        {searchResponse.items && <Pagination total={Math.ceil((searchResponse.total_count / 24))} current={page} onClickNext={handleClickNext} onClickPrevius={handleClickPrevius} />}
      </section>
      <Footer />
    </div>
  )
}

export default Home
