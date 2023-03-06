import React, { memo } from 'react'
import { Spinner } from '..'
import './search-bar.css'

type PropsType = {
  disabled: boolean,
  searchRef: React.RefObject<HTMLInputElement>,
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const SearchBar: React.FC<PropsType> = (props: PropsType) => {
  const { onSubmit, searchRef, disabled } = props

  return (
    <form className='search' onSubmit={(e) => onSubmit(e)}>
      <input ref={searchRef} type='search' placeholder='Enter Github User' />
      <button disabled={disabled}>{disabled ? <Spinner /> : 'Search'}</button>
    </form>
  )
}

export default memo(SearchBar)