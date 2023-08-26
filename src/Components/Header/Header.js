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
      <div className="header-content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="email-signup">
          <input type="email" placeholder='Email address' required />
          <button type='submit'>Get Started</button>
        </form>
      </div>
    </div>
  )
}
