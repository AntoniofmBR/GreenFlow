import React from 'react';

type CardProps = {
  src: string
  text: string
}

export function Card({ src, text }: CardProps) {
  return (
    <div 
     className='lg:w-96 md:w-80 sm:w-70 flex items-center bg-card_background rounded-lg border-2 border-black p-7 gap-5 hover:scale-105 transition duration-300 ease-in-out'
    >
      <img
        src={src}
        alt="Image Card"
        className='lg:h-20 md:h-20 sm:h-20 w-20'
      />
      <p
       className='text-black font-semibold text-xl text-center'
       >
        {text}
      </p>
    </div>
  )
}