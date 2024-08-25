import React from 'react';

type CardProps = {
  src: string
  text: string
}

export function Card({ src, text }: CardProps) {
  return (
    <div 
     className='flex items-center bg-card_background rounded-lg border-2 border-black p-7 w-96 gap-5 hover:scale-105'
    >
      <img
        src={src}
        alt="Image Card"
        className='h-20 w-20'
      />
      <p
       className='text-black font-semibold text-xl text-center'
       >
        {text}
      </p>
    </div>
  )
}