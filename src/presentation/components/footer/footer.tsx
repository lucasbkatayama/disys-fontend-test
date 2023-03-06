import React, { memo } from 'react'
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import './footer.css'

const Footer: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: 'icons', size: '30px' }}>
      <footer>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/lucas-katayama-812966151/'>
          <FaLinkedin />
        </a>
      </footer>
    </IconContext.Provider>
  )
}

export default memo(Footer)