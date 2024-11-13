import React, { useState } from 'react';
import { Envelope, User, LockSimple } from '@phosphor-icons/react';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/input';

import logo from '../../assets/logo_greenflow.png'
import illustration from '../../assets/illustration_register.png'

export function Register() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()

  function handleNavigateToLoginPage() {
    navigate('/login')
  }

  function handleBackToHomepage() {
    navigate('/')
  }

  function handleRegister() {
    if (name == '' || email == '' || password == '') {
      return alert('❌ Por favor preencha todos os campos para se cadastrar!')
    }

    if ( !email.includes('@')) {
      return alert('❌ E-mail inválido')
    }

    setName('')
    setEmail('')
    setPassword('')
    
    /** Função que moveria o usuário para a página do projeto */
    /** ex: navigate('/homepage') */

    alert('✔️ Cadastro efetuado com sucesso!')
    return navigate('/')
  }

  return (
    <div className='min-h-screen p-7 flex lg:flex-row md:flex-row sm:flex-col-reverse justify-between items-center'>
      <section className='w-1/2 flex items-center justify-center' >
        <motion.img
          src={illustration}
          alt='illustration'
          whileHover={{ scale: 1.1 }}
          className='h-full w-auto'
        />
      </section>

      <section className='flex flex-col p-7 items-center lg:w-1/2 md:w-1/2 sm:w-full gap-12'>
        <div className='flex flex-col gap-4' >
          <motion.img
            src={ logo }
            alt="logo"
            whileHover={{ scale: 1.1 }}
            onClick={ () => handleBackToHomepage() }
            className='h-20'
          />
          <h1 className='text-center text-blacks-black_300 font-bold text-4xl' >
            Cadastro
          </h1>
        </div>
        
        <form className='flex flex-col gap-7 w-3/5' >
          <Input
            type='text'
            placeholder='Nome'
            icon={ User }
            onChange={ (e) => setName(e.currentTarget.value) }
            value={ name }
          />

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
            onClick={ () => handleRegister() }
          >
            Entrar
          </motion.button>
        </form>

        <div className='flex flex-col items-center justify-center font-semibold' >
          <h1 className='text-xl text-blacks-black_300' >
            Já possui uma conta?
          </h1>
          <motion.p
            onClick={ () => handleNavigateToLoginPage() }
            whileHover={{ scale: 1.07 }}
            className='text-sm text-greens-green_200'
          >
            faça login aqui
          </motion.p>
        </div>
      </section>
    </div>
  )
}