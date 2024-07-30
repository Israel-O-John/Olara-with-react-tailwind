import { useState } from 'react'
import React from 'react';
import './left.css'
import webLogo from './assets/icons/webLogo.svg'
import Google from './assets/icons/Google.svg'
import Facebook from './assets/icons/Facebook.svg'




export default function App() {
  return (
    <div>
     <div className='left'>
        <img src={webLogo} alt="Logo" />
        <div className='pl-14 left-padd' >
          <div>
            <h1 className='pb-7 text-5xl font-bold sign-in'>Sign In</h1>
            <h3 className='text-lg'>Don't have an account? <span className='underline text-green-400'>Create now</span></h3>
          </div>
          <div>
            <form action="" className='form'>
              <label>E-mail</label>
              <input type="text" placeholder='example@gmail.com' />
              <label>Password</label>
              <input type="password" placeholder='@#*%' />
            </form>
          </div>
          <div className='flex justify-between'>
            <div>
            <input type="checkbox" />
            <label>Remember me</label>
            </div>
            <h3>Forgot Password?</h3>
          </div>
          <button>Sign in</button>
          <div>
            <div className='hr-rule'><hr />or<hr /></div>
            <button className='btn'>
              <img src={Google} alt="Google" />
              <h2>Continue with Google</h2>
            </button>
            <button className='btn'>
              <img src={Facebook} alt="Facebook" />
              <h2>Continue with Facebook</h2>
            </button>
          </div>
        </div>
     </div>
    </div>
  )
}
