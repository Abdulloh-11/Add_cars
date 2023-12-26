import React, { Component } from 'react';
import { Routes , Route } from 'react-router-dom';
import Cars from './components/Cars';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';



export default function App() {
  return (
    <div className='container-fluid'>
   
    
    <Routes>
      <Route path='/' element={<SecondComponent/>}/>
      <Route path='/home/:id' element={<FirstComponent/>}/>
      <Route path='/cars' element={<Cars/>}/>
    </Routes>
    </div>
  );
}



