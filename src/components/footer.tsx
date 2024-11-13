import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo_greenflow.png'
import { Link } from 'react-scroll';

export function Footer() {
  const navigate = useNavigate()

  function handleNavigateToContactPage() {
    navigate('/contact')
  }

  function handleNavigateToHomepage() {
    navigate('/')
  }

  return (
    <div className='w-full h-32 p-7 flex flex-col items-center justify-center gap-2 bg-greens-green_200 text-whites-white_400'
    >
      <section className='flex lg:flex-row md:flex-row sm:flex-col justify-between items-center w-full' >
        <motion.img
          src={logo}
          alt="Logo GreenFLow"
          className='lg:h-16 md:h-16 sm:h-0'
          whileHover={{ scale: 1.1 }}
        />

        <div className='flex lg:gap-12 md:gap-10 sm:gap-7 lg:text-xl md:text-base sm:text-base' >
          <Link to="home" smooth={true} duration={500} >
            <motion.button
              className='font-semibold hover:scale-105   transition duration-300 ease-in-out'
              whileHover={{ scale: 1.1, backgroundColor: 'bg-greens-green_200' }}
              onClick={ () => handleNavigateToHomepage() }
            >
              Home
            </motion.button>
          </Link>

        <Link to="about" smooth={true} duration={500} >
          <motion.button 
            className='font-semibold hover:scale-105 transition duration-300 ease-in-out'
            whileHover={{ scale: 1.1 }}
          >
            Sobre
          </motion.button>
        </Link>
        
        <Link to="contribution" smooth={true} duration={500} >
          <motion.button 
            className='font-semibold hover:scale-105 transition duration-300 ease-in-out'
            whileHover={{ scale: 1.1 }}
          >
            Contribuição
          </motion.button>
        </Link>

          <motion.button
            className='font-semibold hover:scale-105 transition duration-300 ease-in-out'
            onClick={ () => handleNavigateToContactPage() }
          >
            Contato
          </motion.button>
        </div>
      </section>

      <section className='flex lg:justify-between md:justify-between sm:justify-center items-center w-full border-t-2 border-whites-white_400' >
        <p className='text-whites-white_400 lg:text-xs md:text-xs sm:text-sm font-light mt-3' >
          Copyright © 2024 | Todos os direitos reservados
        </p>

        <div />
      </section>
    </div>
  )
}