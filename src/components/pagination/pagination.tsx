import React, { memo } from 'react'
import { IconContext } from "react-icons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './pagination.css'

type PropsTypes = {
  total: number,
  current: number
}

const Pagination: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { total, current } = props

  return (
    <IconContext.Provider value={{ className: 'icons', size: '20px' }}>
      <div className='pagination'>
        <button><FaAngleLeft /></button>
        <p>Page <b>{current}</b> of <b>{total}</b></p>
        <button><FaAngleRight /></button>
      </div>
    </IconContext.Provider>
  )
}

export default memo(Pagination)