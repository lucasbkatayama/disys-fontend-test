import { useRef } from 'react'
import './App.css'
import { Header, Search, Card, Pagination, Footer } from './components';
import MOCK_USERS from './mock-users.json'

function App() {
  const searchRef = useRef<HTMLInputElement>(null);

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
          {MOCK_USERS.items.map((user) => (
            <Card {...user} />
          ))}
        </div>
        <Pagination total={Math.ceil((MOCK_USERS.total_count / 24))} current={1} />
      </section>
      <Footer />
    </div>
  )
}

export default App
