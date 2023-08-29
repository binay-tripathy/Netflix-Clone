import React from 'react'
import './Footer.scss'
import DownIcon from '../../Images/down-icon.png'
import Globe from '../../Images/globe.png'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>Questions? Call 000-800-919-1694</h4>
      <div className="row">
        <div className="col">
          <a href="/">FAQ</a>
          <a href="/">Media Centre</a>
          <a href="/">Ways to Watch</a>
          <a href="/">Cookie Preferences</a>
          <a href="/">Speed Test</a>
        </div>
        <div className="col">
          <a href="/">Help Centre</a>
          <a href="/">Investor Relations</a>
          <a href="/">Terms of Use</a>
          <a href="/">Corporate Information</a>
          <a href="/">Legal Notices</a>
        </div>
        <div className="col">
          <a href="/">Account</a>
          <a href="/">Jobs</a>
          <a href="/">Privacy</a>
          <a href="/">Contact Us</a>
          <a href="/">Only on Netflix</a>
        </div>
      </div>
      <button className='lang-btn'><img src={Globe} alt="Globe" style={{marginLeft:"-12px", marginRight:"10px", height:"20px", width:"25px"}}/>English <img src={DownIcon} alt="DownIcon" /> </button>
      <p className='copyright'>Netflix India</p>
    </div>
  )
}

export default Footer