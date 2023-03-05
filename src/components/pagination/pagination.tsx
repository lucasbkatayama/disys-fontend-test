import React, { memo } from 'react'
import { IconContext } from "react-icons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './pagination.css'

type PropsTypes = {
  total: number,
  current: number,
  onClickPrevius: () => void
  onClickNext: () => void
}

const Pagination: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { total, current, onClickPrevius, onClickNext } = props

  return (
    <IconContext.Provider value={{ className: 'icons', size: '20px' }}>
      <div className='pagination'>
        <button onClick={onClickPrevius}><FaAngleLeft /></button>
        <p>Page <b>{current}</b> of <b>{total}</b></p>
        <button onClick={onClickNext}><FaAngleRight /></button>
      </div>
    </IconContext.Provider>
  )
}

export default memo(Pagination)