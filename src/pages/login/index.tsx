import React, { useState } from 'react';
import { Envelope, LockSimple } from '@phosphor-icons/react';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/input';

import illustration from '../../assets/illustration_login.png'
import logo from '../../assets/logo_greenflow.png'

export function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()

  function handleNavigateToRegisterPage() {
    navigate('/register')
  }

  function handleBackToHomepage() {
    navigate('/')
  }

  function handleLogin() {
    if (email == '' || password == '') {
      return alert('❌ Por favor preencha todos os campos para efetuar o login!')
    }

    if ( !email.includes('@')) {
      return alert('❌ E-mail inválido')
    }

    setEmail('')
    setPassword('')
    
    /** Função que moveria o usuário para a página do projeto */
    /** ex: navigate('/homepage') */

    alert('✔️ Login realizado com sucesso!')
    return navigate('/')
  }

  return (
    <div className='min-h-screen p-7 flex lg:flex-row md:flex-row sm:flex-col justify-between items-center'>
      <section className='flex flex-col p-7 items-center lg:w-1/2 md:w-1/2 sm:w-full gap-12'>
        <div className='flex flex-col gap-4' >
          <motion.img
            src={ logo }
            onClick={ () => handleBackToHomepage() }
            alt="logo"
            whileHover={{ scale: 1.1 }}
            className='h-20'
          />
          <h1 className='text-center text-blacks-black_300 font-bold text-4xl' >
            Login
          </h1>
        </div>
        
        <form className='flex flex-col gap-7 w-3/4' >
          <Input
            type='email'
            placeholder='seuemail@email.com'
            icon={ Envelope }
            onChange={ (e) => setEmail(e.currentTarget.value) }
            value={ email }
          />

          <Input
            type='password'
            placeholder='Senha'
            icon={ LockSimple }
            onChange={ (e) => setPassword(e.currentTarget.value) }
            value={ password }
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            className='bg-greens-green_200 p-3 rounded-lg text-whites-white_400 text-xl font-semibold '
            type='submit'
            onClick={ () => handleLogin() }
          >
            Entrar
          </motion.button>
        </form>

        <div className='flex flex-col items-center justify-center font-semibold' >
          <h1 className='text-xl text-blacks-black_300' >
            Não possui uma conta?
          </h1>
          <motion.p
            onClick={ () => handleNavigateToRegisterPage() }
            whileHover={{ scale: 1.07 }}
            className='text-sm text-greens-green_200'
          >
            Cadastre-se aqui
          </motion.p>
        </div>

      </section>
      <section className='w-1/2 flex items-center justify-center' >
        <motion.img
          src={illustration}
          alt='illustration'
          whileHover={{ scale: 1.1 }}
          className='h-full w-auto lg:mt-0 md:mt-0 sm:mt-10'
        />
      </section>
    </div>
  )
}