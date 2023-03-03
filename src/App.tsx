import { useRef } from 'react'
import './App.css'
import MOCK_USERS from './mock-users.json'

function App() {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(searchRef.current?.value)
  }
  
  return (
    <div className='main'>
      <header>
        <h1>DISYS - FrontEnd Test</h1>
      </header>
      <section>
        <form onSubmit={(e) => onSubmit(e)}>
          <input ref={searchRef} type='search' placeholder='Enter Github User' />
          <button>Search</button>
        </form>
        <div className='cards-wrap'>
          {MOCK_USERS.items.map((user) => (
            <div className='card-container'>
            <div className='card'>
              <img width={80} src={user.avatar_url} alt='profile' />
              <div className='card-text'>
                <p>{user.login}</p>
                <a target='_blank' rel='noreferrer' href={user.html_url}>{user.html_url}</a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
      <footer></footer>
    </div>
  )
}

export default App
