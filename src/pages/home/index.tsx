import React from 'react';

import illustration from '../../assets/illustration_homepage.png'
import { Header } from '../../components/header';
import { Separator } from '../../components/separator';

export function Home() {
  return (
    <div className='min-h-screen w-auto flex flex-col justify-between border' >
      <div className='flex flex-col justify-between p-7 pb-0 ' >
          <Header />
          <div className='flex flex-wrap justify-between items-center mt-20' >
            <div>
              <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-title_homepage font-extrabold '>
                Pequenas ações, <br/> grandes transformações
              </h1>
              <p className='lg:text-2xl md:text-base sm:text-2xl text-black font-light mt-5 ' >
                Faça a sua parte contribuindo com a destinação correta <br /> de resíduos e a otimização de recursos.
              </p>
 
              <a href="#">
                <button
                  className='p-3.5 lg:w-auto md:w-auto sm:w-full bg-button_background border rounded-lg font-black text-slate-100 mt-16 hover:scale-110 hover:bg-button_hover_background'
                >
                    ACESSE HOJE MESMO
                </button>
              </a>
            </div>

            <img
              src={illustration}
              alt="Illustration"
              className='lg:h-96 md:h-72 sm:h-80 sm:mt-20 ml-20 '
            />
          </div>
      </div>
      <Separator />
    </div>
  )
}