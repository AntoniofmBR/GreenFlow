import React from 'react';

import logo from '../assets/logo_greenflow.png'

export function Header () {
  return (
    <header className='w-full flex justify-between items-center' >
        <img
        src={logo}
        alt="GreenFlow"
        className='h-16'
        />

        <div className='flex lg:gap-12 md:gap-10 sm:gap-7 mr-20 sm:mr-0' >
          <button className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out' >
            Home
          </button>
          <button className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out' >
            Sobre
          </button>
          <button className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out' >
            Contato
          </button>
        </div>
    </header>
  )
}