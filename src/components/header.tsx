import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import logo from '../assets/logo_greenflow.png'

export function Header () {
  const navigate = useNavigate()

  function handleNavigateToContactPage() {
    navigate('/contact')
  }

  function handleNavigateToHomepage() {
    navigate('/')
  }

  function handleNavigateToLoginPage() {
    navigate('/login')
  }

  return (
    <header className='w-full flex lg:flex-row md:flex-row sm:flex-col justify-between items-center' >
        <motion.img
        src={logo}
        alt="GreenFlow"
        whileHover={{ scale: 1.1 }}
        className='lg:h-16 md:h-16 lg:mb-0 md:mb-0 sm:h-20 sm:mb-7'
        />

        <div className='flex items-center justify-center lg:gap-12 md:gap-10 sm:gap-7 mr-20 sm:mr-0' >
          <motion.button
            className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out'
            whileHover={{ scale: 1.1, backgroundColor: 'bg-greens-green_200' }}
            onClick={ () => handleNavigateToHomepage() }
          >
            Home
          </motion.button>

        <Link to="about" smooth={true} duration={500} >
          <motion.button 
            className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out'
            whileHover={{ scale: 1.1 }}
          >
            Sobre
          </motion.button>
        </Link>
        
        <Link to="contribution" smooth={true} duration={500} >
          <motion.button 
            className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out'
            whileHover={{ scale: 1.1 }}
          >
            Contribuição
          </motion.button>
        </Link>

          <motion.button
            className='lg:text-2xl md:text-xl sm:text-xl font-semibold hover:scale-105 transition duration-300 ease-in-out'
            onClick={ () => handleNavigateToContactPage() }
          >
            Contato
          </motion.button>
        </div>

        <motion.button
            className=' lg:w-40 md:w-auto sm:w-0 lg:h-auto md:h-auto sm:h-0 lg:p-3.5 md:p-3.5 sm:p-0 bg-blacks-black_200 border rounded-lg font-black text-whites-white_400'
            whileHover={{ scale: 1.1, backgroundColor: '#000000' }}
            onClick={ () => handleNavigateToLoginPage() }
          >
            <h1 className='text-xl' >
              ACESSAR
            </h1>
          </motion.button>
    </header>
  )
}