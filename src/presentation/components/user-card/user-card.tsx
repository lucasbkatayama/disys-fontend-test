import React, { memo } from 'react'
import { FaUserAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaFolder } from 'react-icons/fa'
import { User } from '../../../domain/models'
import './user-card.css'

const UserModal:React.FC<User> = (props: User) => {
  const { name, login, location, email, public_repos, avatar_url } = props

  return (
    <div className='user-card'>
      <img src={avatar_url} alt='avatar' />
      <div>
        <p><b>{name ? name : 'Unregister Name'}</b></p>
        <p><FaUserAlt /> {`@${login}`}</p>
        <p><FaEnvelopeOpenText /> {email ? email : 'Unregister Email'}</p>
        <p><FaMapMarkerAlt /> {location ? location : 'Unregister Location'}</p>
        <p><FaFolder /> {`${public_repos} repos`}</p>
      </div>
    </div>
  )
}

export default memo(UserModal)