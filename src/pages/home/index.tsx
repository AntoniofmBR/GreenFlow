import React from 'react';
import { motion } from 'framer-motion';

import { Header } from '../../components/header';
import { Separator } from '../../components/separator';

import illustration from '../../assets/illustration_homepage.png'
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate()

  function handleNavigateToAuthentication() {
    navigate('/login')
  }

  return (
    <div className='min-h-screen w-auto flex flex-col justify-between' >
      <div className='flex flex-col justify-between p-7 pb-0 ' >
          <Header />
          <div className='flex flex-wrap lg:justify-between md:justify-between sm:justify-center items-center mt-20' >
            <div>
              <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-greens-green_200 font-extrabold lg:text-left md:text-left sm:text-center'>
                Pequenas ações, <br/> grandes transformações
              </h1>
              <p className='lg:text-2xl md:text-base sm:text-2xl lg:text-left md:text-left sm:text-center text-blacks-black_300 font-light mt-5 ' >
                Faça a sua parte contribuindo com a destinação correta <br /> de resíduos e a otimização de recursos.
              </p>
 
                <motion.button
                  className='p-3.5 lg:w-auto md:w-auto sm:w-full bg-blacks-black_200 border rounded-lg font-black text-whites-white_400 mt-16'
                  whileHover={{ scale: 1.1, backgroundColor: '#000000' }}
                  onClick={ () => handleNavigateToAuthentication() }
                >
                    ACESSE HOJE MESMO
                </motion.button>
            </div>

            <motion.img
              src={illustration}
              alt="Illustration"
              whileHover={{ scale: 1.1 }}
              className='lg:h-96 md:h-72 sm:h-80 sm:mt-20'
            />
          </div>
      </div>
      <Separator />
    </div>
  )
}