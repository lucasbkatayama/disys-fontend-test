import React, { memo } from 'react'
import './spinner.css'

const Spinner: React.FC = () => {
  return (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  )
}

export default memo(Spinner)