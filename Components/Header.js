import React from 'react'
import MainIco from './DarkMode/MainIco'
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1 className='font-extralight' >Make Daily Notes</h1>

      <MainIco
      handleToggleDarkMode={handleToggleDarkMode}

      />

    </div>
  )
}

export default Header
