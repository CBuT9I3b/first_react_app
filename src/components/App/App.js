import React from 'react';
import { Header, FormSort, Routes, NavBar } from '..';

const App = () => (
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-xl-10 col-lg-10'>
        <NavBar />
        <Header />
        <FormSort />
        <Routes />
      </div>
    </div>
  </div>
)

export default App;
