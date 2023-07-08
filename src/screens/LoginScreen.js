import React from 'react'
import './LoginScreen.css'
import { useState } from 'react';
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png' className="netflix-logo" alt='netflix-logo' />
                <button className='loginScreen_button' onClick={() => setSignIn(true)}>Sign in</button>
                <div className='loginScreenBody'>
                    {signIn ? <SignUpScreen /> :
                        <>
                            <h1>Unlimited movies, TV shows and more</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreenInput">
                                <form>
                                    <input type='email' placeholder='Email Address' />
                                    <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>
                                </form>
                            </div>
                        </>}

                </div>
            </div >
            <div className='loginScreenGradient'></div>

        </div >
    )
}

export default LoginScreen
