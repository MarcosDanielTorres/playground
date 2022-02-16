import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="app__footer">
        <ul className='app__footer-links'>
          <li>Privacy Policy</li>
          <li>Buy $LMAO Now</li>
          <li>Live Chart</li>
        </ul>

        <div className="app__footer-copyright">
          <b>Copyright</b>
          <p>2021 LMAO</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer