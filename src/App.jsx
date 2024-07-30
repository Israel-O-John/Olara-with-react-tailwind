import { useState } from 'react'
import React from 'react';
import './left.css'
import webLogo from './assets/icons/webLogo.svg'
import Google from './assets/icons/Google.svg'
import Facebook from './assets/icons/Facebook.svg'
import support from './assets/icons/support.svg'
import VenusCard from './assets/images/VenusCard.png'
import Icon from './assets/images/Icon.png'
import skip from './assets/icons/skip.svg'
import Ellipse from './assets/images/Ellipse.svg'




export default function App() {
  return (
    <div className='flex max-w-screen-xl gap-12 bg-white mx-auto items-center justify-center py-8'>
     <div className='max-w-xl flex flex-col gap-4'>
        <img src={webLogo} alt="Logo" className='max-w-40'/>
        <div className='pl-14 flex flex-col gap-8' >
          <div>
            <h1 className='pb-7 text-5xl font-bold text-zinc-900'>Sign In</h1>
            <h3 className='text-lg'>Don't have an account? <span className='underline text-green-700'>Create now</span></h3>
          </div>
          <div>
            <form action="" className='flex flex-col gap-5'>
              <div className='flex flex-col gap-3'>
              <label className='font-medium text-base text-gray-500'>E-mail</label>
              <input type="text" placeholder='example@gmail.com' className='border rounded-xl border-slate-300 px-3 py-2.5 text-base text-gray-600' />
              </div>
              <div className='flex flex-col gap-3'>
              <label className='font-medium text-base text-gray-500'>Password</label>
              <input type="password" placeholder='@#*%'  className='border rounded-xl border-slate-300 px-3 py-2.5 text-base text-gray-600'/>
              </div>
            </form>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
            <input type="checkbox" />
            <label className='text-gray-600 font-medium'>Remember me</label>
            </div>
            <h3 className='font-medium text-green-700 underline'>Forgot Password?</h3>
          </div>
          <button className='w-full bg-green-950 text-white rounded-2xl text-xl font-semibold py-2'>Sign in</button>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center'><hr className='w-60' /><p className='text-gray-500 text-xs'>OR</p><hr className='w-60'/></div>
            <button className='flex gap-32 w-full border rounded-2xl py-3 px-4'>
              <img src={Google} alt="Google" />
              <h2 className='font-medium text-lg text-gray-500'>Continue with Google</h2>
            </button>
            <button className='flex gap-32 w-full border rounded-2xl py-2 px-4'>
              <img src={Facebook} alt="Facebook" />
              <h2 className='font-medium text-lg text-gray-500'>Continue with Facebook</h2>
            </button>
          </div>
        </div>
     </div>
     <div className='flex flex-col relative gap-28 items-center  bg-green-950  py-9 px-32'>
        <div className='absolute -right-20 -top-20'>
          <img src={Ellipse} alt="" />
        </div>
        <div className='flex gap-2 items-center'>
          <img src={support} alt="Suport" />
          <p className='font-medium text-xl text-white'>Support</p>
        </div>
        <div className='flex flex-col gap-20'>
          <div className='flex relative bg-white py-12 pl-5 max-w-lg rounded-xl items-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl font-bold tracking-tight max-w-56 text-green-800 pb-3'>Reach financial goals faster</h1>
              <p className='text-base font-medium tracking-tight max-w-56 text-gray-600 pb-2'>Use your Venus card around the world with no hidden fees.
                Hold, transfer and spend money.
              </p>
              <button className='text-white rounded-full bg-green-950 text-sm font-medium py-2'>Learn more</button>
            </div>
            <div>
              <img src={VenusCard} alt="Venus card" />
            </div>
            <div className='flex absolute right-0 -bottom-12 gap-2  items-center p-5 bg-white rounded-xl'>
              <img src={Icon} alt="Rate" />
              <div className='pr-12'>
                <p className='tracking-tight text-sm font-medium text-green-800'>Earnings</p>
                <h1 className='text-green-800 tracking-tight font-bold text-2xl'>$350.40</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-center text-white  font-semibold text-4xl pb-9'>Introducing new features</h1>
            <p className='text-center  text-white text-xl'>Analyzing previous trends ensures that businesses always makes the right decisoins.
              And as the scale of the decision and it's impacts magnifies...
            </p>
          </div>
          <div className='mx-auto'>
          <img src={skip} alt="skip" />
          </div>
        </div>
        
       
     </div>
    </div>
  )
}
