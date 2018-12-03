import React from 'react';
import { Header, FormSort, Routes, NavBar } from '..';
import { ProgressBar } from '../../containers';

const App = () => (
  <div>
    <ProgressBar />
    <NavBar />
    <Header />
    <FormSort />
    <Routes />
  </div>
)

export default App;
