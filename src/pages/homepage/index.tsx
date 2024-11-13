import React from 'react';
import { Element } from 'react-scroll';

import { About } from '../../pages/about';
import { Contribution } from '../../pages/contribution';
import { Home } from '../../pages/home';

export function Homepage () {
  return (
    <main>
      <Element name='home' >
        <Home />
      </Element>

      <Element name='contribution' >
        <Contribution />
      </Element>

      <Element name='about' >
          <About />
      </Element>
    </main>
  )
}