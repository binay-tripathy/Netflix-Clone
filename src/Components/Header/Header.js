import React from 'react'
import './Header.scss'
import Logo from '../../Images/logo.png'
import DownIcon from '../../Images/down-icon.png'
import Globe from '../../Images/globe.png'

export const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={Logo} alt="Logo" />
        <div className='buttons'>
          <button className='lang-btn'><img src={Globe} alt="Globe" style={{margin:"-10px 10px -9px -5px ", height:"20px", width:"25px"}}/>English <img src={DownIcon} alt="DownIcon" /> </button>
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
