import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Header, NavBar } from '..';

const App = () => (
  <div className="container">
    <div className='row justify-content-center'>
      <div className='col-xl-10 col-lg-10'>
        <NavBar />
        <Header />
        <Routes />
      </div>
    </div>
  </div>
);

export default App;
