import React from 'react';

import { Card } from '../../components/card'
import Leaf from '../../assets/cards_image/leaf.png'
import Trash from '../../assets/cards_image/trash.png'
import Heart from '../../assets/cards_image/heart.png'
import Money from '../../assets/cards_image/money.png'
import Brain from '../../assets/cards_image/brain.png'
import Market from '../../assets/cards_image/market.png'

export function Contribution() {
  return (
    <div className='h-screen p-7 flex flex-col items-center'>
      <h1 className='text-center text-black font-bold text-4xl mt-10' >
        Com a GreenFlow você contribui com:
      </h1>
      <div className='mt-32 grid grid-cols-3 gap-12 w-full' >
        <Card
          src={Leaf}
          text={'A conservação de recursos naturais'}
        />
        <Card
          src={Trash}
          text={'A redução do desperdício de alimentos'}
        />
        <Card
          src={Heart}
          text={'A melhoria da saúde pública e local'}
        />
        <Card
          src={Money}
          text={'Processos mais econômicos e ágeis'}
        />
        <Card
          src={Brain}
          text={'Conscientização sobre práticas sustentáveis'}
        />
        <Card
          src={Market}
          text={'Produtos mais sustentáveis e atraentes'}
        />
      </div>
    </div>
  )
}