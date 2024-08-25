import React from 'react';
import { EnvelopeSimple, Phone } from '@phosphor-icons/react';

import logo from '../assets/logo_greenflow.png'

export function Footer() {
  return (
    <div
      className='bg-title_homepage w-full h-24 flex gap-7 items-center justify-center'
    >
      <img
        src={logo}
        alt="Logo GreenFLow"
        className='h-20'
      />
      <div className='flex flex-col' >
        <div className='flex text-slate-50 items-center gap-2' >
          <EnvelopeSimple size={20} color='#FFFF' />
          <p>contato@greenflow.com</p>
        </div>
        <div className='flex text-slate-50 items-center gap-2' >
          <Phone size={20} color='#FFFF' />
          <p>11 1234-5678</p>
        </div>
      </div>
    </div>
  )
}