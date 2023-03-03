import { useRef, useContext } from 'react'
import './App.css'
import { Header, Search, Card, Pagination, Footer } from './components';
import { GithubContext } from './context/github-context';

function App() {
  const searchRef = useRef<HTMLInputElement>(null);
  const githubUsers = useContext(GithubContext)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(searchRef.current?.value)
  }
  
  return (
    <div className='main'>
      <Header />
      <section>
        <Search ref={searchRef} onSubmit={onSubmit} />
        <div className='cards-wrap'>
          {githubUsers.items.map((user) => (
            <Card {...user} />
          ))}
        </div>
        <Pagination total={Math.ceil((githubUsers.total_count / 24))} current={1} />
      </section>
      <Footer />
    </div>
  )
}

export default App
