import React from 'react';

import { Header, FormSort, Routes, NavBar } from '..';
import { ProgressBar } from '../../containers';

const App = () => (
  <div>
    <ProgressBar />
    <NavBar />
    <div className='container'>
      <Header />
      <FormSort />
      <Routes />
    </div>
  </div>
)

export default App;
