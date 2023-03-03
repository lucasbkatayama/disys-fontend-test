import React, { memo } from 'react'
import './header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
        <h1>DISYS - FrontEnd Test</h1>
    </header>
  )
}

export default memo(Header)