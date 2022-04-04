import React, { useState } from 'react'
import './Login.css'
import SignIn from './SignIn/SignIn';

function Login() {

    const [signIn, setSignIn] = useState(false);


  return (
      <div className='loginScreen'>
          <div className='loginscreen_background'>
              <img className='loginscreen_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Background' />
              <button onClick={() => setSignIn(true)} className='loginscreen_button'>Sign In</button>
              <div className='loginScreen_gradient' />
              <div className='loginHolder'>
                  <div className='loginScreen_body'>
                      {signIn ? (
                          <SignIn />
                      ): ( 
                        <>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className='loginScreen_input'>
                                <form>
                                    <input type='email' 
                                        placeholder='EmailAddress'
                                    />
                                    <button onClick={() => setSignIn(true)} className='loginScreen_getStarted'>GET STARTED</button>
                                </form>
                            </div>
                        </>  
                      )}
                </div>
              </div>
          </div>
      </div>
  )
}

export default Login