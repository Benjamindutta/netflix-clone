import React, { useRef } from 'react'
import './signupScreen.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'
const SignUpScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                const user = authUser.user;
                // console.log(user);
            }).catch((error) => {
                alert(error.message)
            })
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authuser) => {
            const user = authuser.user;
            // console.log(user)
        }).catch((e) => {
            alert(e.message);
        })
    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Enter Email' ref={emailRef} />
                <input type='password' placeholder='Password' ref={passwordRef} />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen_gray'>New to netflix ? </span>
                    <span className='signupScreen_link' onClick={signUp}>Sign up Now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
