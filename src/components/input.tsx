import React from 'react';
import { IconProps } from '@phosphor-icons/react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string
  placeholder: string
  icon?: React.ElementType<IconProps>
  className?: string
}

export function Input({ type, placeholder, icon: Icon, className, ...rest }: InputProps) {
  return (
    <div 
      className={`flex items-center justify-left text-blacks-black_300 p-2 rounded-lg border-2 border-blacks-black_300 text-base bg-whites-white_300 ${className}`}
    >
      {Icon && <Icon size={35} fill='bold' className="mr-2" />}
      <input
        type={ type }
        placeholder={ placeholder }
        className='outline-none h-12 w-full bg-transparent'
        { ...rest }
      />
    </div>
  )
}