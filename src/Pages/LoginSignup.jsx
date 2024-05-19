import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_container">
      <h1>Sign Up</h1>
      <div className="loginsignup_inputs">
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Password'/>
      </div>

      <button>Continue</button>
      <p>Already have an account? <span>Login here</span></p>
      <div className="loginsignup_check">
      <input type='checkbox'/>
      <p>By continue, i agree to the terms of use & privacy policy</p>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup
