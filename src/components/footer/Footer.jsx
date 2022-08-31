import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>CASEY</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/casey-moreno"><BsLinkedin/></a>
        <a href="www.linkedin.com/in/casey-morenof" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Casey Moreno. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer