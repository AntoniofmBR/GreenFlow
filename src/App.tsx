import React from 'react';
import { About } from './pages/about/index';
import { Contribution } from './pages/contribution/index';
import { Home } from './pages/home/index';


export function App() {
  return (
      <>
       <Home/>
       <Contribution />
       <About />
      </>
  )
}