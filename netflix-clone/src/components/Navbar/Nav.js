import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import { auth } from "../../firebase"


function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

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

    // const [toggle, setToggle] = useState(false);

    // const signOutAppear = () => {
    //     if (tog) {
            
    //     }
    // }

    return (
        <div className={`nav ${show && "nav__black"}`}>
          <div className='nav__content'>
                <img
                    onClick={()=> navigate('/')}
                    className='nav__logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='NetflixLogo' />
                <div>
                    <img 
                        className='nav__avatar' src='https://imgs.search.brave.com/RpmEWWVvrBoGYAReKTbSB7waKTNR68q8N7mxbr1MXEo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/UlZXd2xKdXVYLU9k/RnQ1Tmp5R1lRSGFI/YSZwaWQ9QXBp' alt='' />
                    <div onClick={() => auth.signOut() } className='signout'>
                        <p>Sign Out</p>
                    </div>
                </div>    
                
          </div>
      </div>
  )
}

export default Nav