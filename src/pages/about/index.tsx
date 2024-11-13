import React from 'react';

import { Footer } from '../../components/footer'
import illustration from '../../assets/illustration_about.png'

export function About() {
  return (
    <div className='min-h-screen w-auto flex flex-col justify-between' >
      <div className='flex flex-col justify-between p-7'>
        <h1 className='text-center text-blacks-black_300 font-bold text-4xl mt-10' >
          Sobre nós
        </h1>

        <div className='flex lg:flex-row md:flex-row sm:flex-col items-center justify-between mt-12 ' >
          <section className='flex flex-col gap-4 w-full' >
            <p className=' lg:text-xl md:text-base sm:text-sm font-semibold text-blacks-black_300'>
              Nossa missão é transformar a gestão de resíduos alimentares e socioecológicos por meio de soluções inovadoras e sustentáveis. Acreditamos que é possível reduzir o desperdício, economizar recursos e promover práticas ecologicamente responsáveis no setor alimentício, criando um impacto positivo duradouro no meio ambiente e na sociedade.
            </p>
            <p className=' lg:text-xl md:text-base sm:text-sm font-semibold text-blacks-black_300' >
              Se você compartilha da nossa visão e deseja saber mais sobre como podemos colaborar, entre em contato. Estamos sempre prontos para novas parcerias e oportunidades que ajudem a construir um futuro melhor!
            </p>
          </section>

          <section className='flex items-center justify-center h-full w-full' >
            <img
            src={illustration}
            alt="Illustration about" 
            className='lg:h-96 md:h-80 sm:h-72 hover:scale-110 hover:antialiased transition duration-300 ease-in-out'
            />
          </section>
        </div>
    </div>
    <Footer />
    </div>
   
  )
}