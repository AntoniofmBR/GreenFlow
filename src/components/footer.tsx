import React from 'react';

import logo from '../assets/logo_greenflow.png'

export function Footer() {
  return (
    <div
      className='w-full h-full flex flex-col items-center justify-center bg-title_homepage '
    >
      <img
        src={logo}
        alt="Logo GreenFLow"
        className='h-16'
      />
      <p className='text-white font-light mb-2' >
        Copyright © 2024 | Todos os direitos reservados
      </p>
    </div>
  )
}