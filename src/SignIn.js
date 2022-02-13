import React from 'react'
import {auth} from './Firebase'
import { signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import './signin.css'

function SignIn() {
    const googleAuth = (e) =>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className='signin'>
        <button onClick={googleAuth}><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' alt='login'/>Google Login</button>
    </div>
  )
}

export default SignIn