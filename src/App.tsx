import { useState, useRef } from 'react'
import './App.css'

function App() {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(searchRef.current?.value)
  }
  
  return (
    <div className='wrapper'>
      <header>
        <h1>DISYS - FrontEnd Test</h1>
      </header>
      <section>
        <form onSubmit={(e) => onSubmit(e)}>
          <input ref={searchRef} type='search' placeholder='Enter Github User' />
          <button>Search</button>
        </form>
        <h3>Users:</h3>
      </section>
      <footer></footer>
    </div>
  )
}

export default App
