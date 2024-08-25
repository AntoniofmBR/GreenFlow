import React from 'react';
import logo from '../../assets/logo_greenflow.png'
import illustration from '../../assets/illustration_homepage.png'
import { Separator } from '../../components/separator';

export function Home() {
  return (
    <div className='h-screen flex flex-col justify-between' >
      <div className='p-7'>
        <img
        src={logo}
        alt="GreenFlow"
        className='h-16'
        />
        <div className='mt-11 flex justify-between items-center' >
          <div>
            <h1 className='text-title_homepage font-extrabold text-5xl'>
              Pequenas ações, <br/> grandes transformações
            </h1>
            <p className='text-black font-light mt-5 text-2xl' >
              Faça a sua parte contribuindo com a destinação correta <br /> de resíduos e a otimização de recursos.
            </p>

            <a href="#">
              <button
                className='bg-button_background border rounded-lg p-3.5 font-black text-slate-100 mt-16 hover:scale-110 hover:bg-button_hover_background'
              >
                SAIBA MAIS
              </button>
            </a>
          </div>

          <img
            src={illustration}
            alt="Illustration"
            className='h-96 ml-20 pr-28'
          />
        </div>
      </div>
      <Separator />
    </div>
  )
}