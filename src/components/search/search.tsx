import React, { memo } from 'react'
import './search.css'

type PropsType = {
  ref: React.RefObject<HTMLInputElement>,
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Search: React.FC<PropsType> = (props: PropsType) => {
  const { onSubmit, ref } = props

  return (
    <form className='search' onSubmit={(e) => onSubmit(e)}>
      <input ref={ref} type='search' placeholder='Enter Github User' />
      <button>Search</button>
    </form>
  )
}

export default memo(Search)