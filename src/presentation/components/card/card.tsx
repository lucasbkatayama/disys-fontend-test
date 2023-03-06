import React, { memo } from 'react'
import { FaLink } from "react-icons/fa";
import './card.css'

type PropsType = {
  avatar_url: string,
  login: string,
  html_url: string,
  onClick: () => void
}

const Card: React.FC<PropsType> = (props: PropsType) => {
  const { avatar_url, login, html_url, onClick } = props

  return (
    <div className='card-container' onClick={onClick}>
      <div className='card'>
        <img loading='lazy' width={80} src={avatar_url} alt='profile' />
        <div className='card-text'>
          <p>{login}</p>
          <a target='_blank' rel='noreferrer' href={html_url}><FaLink /> {html_url}</a>
        </div>
      </div>
    </div>
  )
}

export default memo(Card)