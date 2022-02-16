import React from 'react'
import Button from 'react-bootstrap/Button';

import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={logo} alt="lmao logo" />
        </div>
            <ul className="app__navbar-links">
                <li >How To Buy</li>
               <li >Whitepaper</li>
                <li >Moon Map</li>
                <li >Tokenomics</li>
                <li >Contact Us</li>
            </ul>
            
      </nav>
  )
}

export default Navbar