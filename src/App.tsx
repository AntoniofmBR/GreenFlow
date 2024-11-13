import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/homepage';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { Contact } from './pages/contact';


export function App() {
  return (
      <div className='app-container' >
        <Router>
          <Routes>
              <Route path='/' element={ <Homepage /> } />
              <Route path='/register' element={ <Register /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/contact' element={ <Contact /> } />
          </Routes>
        </Router>
      </div>
  )
}