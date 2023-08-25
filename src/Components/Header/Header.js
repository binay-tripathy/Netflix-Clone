import React from 'react'
import './Header.scss'
import Logo from '../../Images/logo.png'
import DownIcon from '../../Images/down-icon.png'

export const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={Logo} alt="Logo" />
        <div>
          <button className='lang-btn'>English <img src={DownIcon} alt="DownIcon" /> </button>
          <button>Sign In</button>
        </div>
      </nav>
    </div>
  )
}
