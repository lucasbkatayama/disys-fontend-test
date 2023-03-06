import { useRef, useContext, useState, useCallback, useEffect } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import './home.css'
import { Header, SearchBar, Card, Pagination, Footer, Modal } from '../../components';
import { GithubContext } from '../../context/github-context';
import { Search } from '../../../domain/usecases';
import UserCard from '../../components/user-card/user-card';
import axios from 'axios';

type Props = {
  search: Search
}

const Home:React.FC<Props> = ({ search }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { searchResponse, setSearchResponse, query, setQuery, page, setPage } = useContext(GithubContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [user, setUser] = useState()

  useEffect(() => {
    if (loading || !query) return
    setLoading(true)
    const fetchData = async () => {
      try {
        const data = await search.search({ query, page });
        setSearchResponse(data)
        setLoading(false)
      } catch (error) {
        setErrorMessage(error.message)
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

  const handleClickCard = async (userLogin: string) => {
    const res = await axios.get(`https://api.github.com/users/${userLogin}`)
    setUser(res.data)
  }
  
  return (
    <div className='main'>
      <Header />
      <section>
        <SearchBar disabled={loading} searchRef={searchRef} onSubmit={onSubmit} />
        <div className='cards-wrap'>
          {searchResponse?.items?.map((user) => <Card key={user.login} {...user} onClick={() => handleClickCard(user.login)} />)}
        </div>
        {searchResponse.items && <Pagination total={Math.ceil((searchResponse.total_count / 24))} current={page} onClickNext={handleClickNext} onClickPrevius={handleClickPrevius} />}
      </section>
      <Footer />
      <Modal open={!!user} onClickClose={() => setUser(undefined)}>
        <UserCard {...user} />
      </Modal>
      <Modal open={!!errorMessage} onClickClose={() => setErrorMessage('')}>
        <FaExclamationTriangle size={50} color='#ffb703' />
        <p className='modal-text'>{errorMessage}</p>
      </Modal>
    </div>
  )
}

export default Home
