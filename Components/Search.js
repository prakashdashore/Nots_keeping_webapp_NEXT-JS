import React from 'react'
import { MdSearch } from 'react-icons/md'

 import {GrAdd} from 'react-icons/gr'
const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
        <input onChange={(e) => handleSearchNote(e.target.value)} type="text" placeholder='type to search...' />
        <MdSearch className='search-icon' size = '2em' />
    
    </div>
  )
}

export default Search