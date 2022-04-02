import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 50) {
            handleShow(true)
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
          <div className='nav__content'>
            <img className='nav__logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='NetflixLogo' />

            <img className='nav__avatar' src='https://imgs.search.brave.com/RpmEWWVvrBoGYAReKTbSB7waKTNR68q8N7mxbr1MXEo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/UlZXd2xKdXVYLU9k/RnQ1Tmp5R1lRSGFI/YSZwaWQ9QXBp' alt='' />
          </div>
      </div>
  )
}

export default Nav