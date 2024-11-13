import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope, User } from '@phosphor-icons/react';

import { Header } from '../../components/header';
import { Input } from '../../components/input';

import illustration from '../../assets/illustration_contact.png'

export function Contact () {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  function handleSendMessage() {
    if (name == '' || email == '' || !email.includes('@') || message == '') {
      return alert('❌ Por favor preencha todos os campos para enviar uma mensagem!')
    }

    /** Função que enviaria um email para "greenflow@contato.com" ( provavelmente teria que conectar com uma Lib externa ) */

    return alert('✔️ Mensagem enviada com sucesso! Obrigado pelo contato')
  }

  return (
    <div className='min-h-screen p-7 flex flex-col justify-between border' >
      <Header />

      <div className='flex lg:flex-row md:flex-row sm:flex-col h-full w-full lg:justify-between md:justify-between sm:justify-center items-center' >
        <section className='lg:w-1/2 md:w-3/4 sm:w-full h-full flex flex-col items-center justify-center lg:text-left md:text-left sm:text-center' >
          <div className='flex flex-col gap-2 mb-14 mt-2' >
              <h1 className='lg:text-3xl md:text-2xl sm:text-2xl text-blacks-black_300 font-black' >
                Colabore com um mundo sustentável
              </h1>
              <p className='lg:text-xl md:text-base sm:text-base' >
                Entre em contato conosco
              </p>
          </div>

          <form className='flex flex-col gap-5 w-3/4' >
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

            <textarea
              className='flex items-center h-40 justify-left text-blacks-black_300 p-2 rounded-lg border-2 border-blacks-black_300 text-base bg-whites-white_300 resize-none'
              placeholder='Mensagem'
              onChange={ (e) => setMessage(e.currentTarget.value) }
              value={ message }
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              className='bg-greens-green_200 p-3 rounded-lg text-whites-white_400 text-xl font-semibold '
              type='submit'
              onClick={ () => handleSendMessage() }
            >
              Enviar mensagem
            </motion.button>
          </form>
        </section>

        <section className='w-1/2 h-full flex flex-col items-center justify-center' >
          <motion.img
            src={illustration}
            alt="Illustration"
            whileHover={{ scale: 1.1 }}
            className='h-full lg:mt-0 md:mt-0 sm:mt-20'
          />
        </section>
      </div>

      <div />
    </div>
  )
}