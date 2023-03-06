import React, { memo } from 'react'
import { FaUserAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaFolder } from 'react-icons/fa'
import './user-card.css'

type Props = {
  avatar_url: string,
  name: string,
  login: string,
  location: string,
  email?: string
  public_repos: number
}

const UserModal:React.FC<Props> = (props: Props) => {
  const { name, login, location, email, public_repos, avatar_url } = props

  return (
    <div className='user-card'>
      <img src={avatar_url} alt='avatar' />
      <div>
        <p><b>{name}</b></p>
        <p><FaUserAlt /> {`@${login}`}</p>
        {email && <p><FaEnvelopeOpenText /> {email}</p>}
        {!email && <p><FaEnvelopeOpenText /> Email não cadastrado</p>}
        <p><FaMapMarkerAlt /> {location}</p>
        <p><FaFolder /> {`${public_repos} repos`}</p>
      </div>
    </div>
  )
}

export default memo(UserModal)