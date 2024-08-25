import React from 'react';

import { Footer } from '../../components/footer'
import illustration from '../../assets/illustration_about.png'

export function About() {
  return (
   <div className='h-screen flex flex-col justify-between'>
     <div className='p-7'>
      <h1 className='text-center text-black font-bold text-4xl mt-10' >
        Sobre nós
      </h1>

      <div className='flex items-center mt-12' >
      <p className='font-semibold text-black text-xl'>
      Nossa missão é transformar a gestão de resíduos alimentares e socioecológicos por meio de soluções inovadoras e sustentáveis. Acreditamos que é possível reduzir o desperdício, economizar recursos e promover práticas ecologicamente responsáveis no setor alimentício, criando um impacto positivo duradouro no meio ambiente e na sociedade.
      <br />
      <br />
      Se você compartilha da nossa visão e deseja saber mais sobre como podemos colaborar, entre em contato. Estamos sempre prontos para novas parcerias e oportunidades que ajudem a construir um futuro melhor!
      </p>

      <img
       src={illustration}
       alt="Illustration about" 
       className='h-96 ml-20 pr-28'
       />
      </div>
    </div>
    <Footer />
   </div>
  )
}