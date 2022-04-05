import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from '../../features/counter/userSlice'
import Nav from '../Navbar/Nav'
import './ProfileScreen.css'
import { auth } from "../../firebase"

function ProfileScreen() {
  const user = useSelector(selectuser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profile_screen_body'>
        <h1>Edit profile</h1>
        <div className='profileScreen_info'>
          <img src='https://imgs.search.brave.com/RpmEWWVvrBoGYAReKTbSB7waKTNR68q8N7mxbr1MXEo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/UlZXd2xKdXVYLU9k/RnQ1Tmp5R1lRSGFI/YSZwaWQ9QXBp' alt='Avatarimg' />
          <div className='profileScreen_details'>
            <h2>{user.email}</h2>
            <div className='profileScreen_plans'>
              <h3>Plans</h3>
              <button onClick={()=> auth.signOut() } className='profileScreen_signout'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen