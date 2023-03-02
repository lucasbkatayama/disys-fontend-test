import { useState, useRef } from 'react'
import './App.css'

function App() {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(searchRef.current?.value)
  }

  return (
    <>
      <header>
        <h1>RSYS FrontEnd Test</h1>
      </header>
      <form onSubmit={(e) => onSubmit(e)}>
        <input ref={searchRef} type='search' placeholder='Enter Github User' />
        <button>Search</button>
      </form>
      <h3>Users:</h3>
      <footer></footer>
    </>
  )
}

export default App
