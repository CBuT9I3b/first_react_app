import React from 'react'

import { Routes, NavBar } from '..'
import { ProgressBar } from '../../containers'

const App = () => (
  <div>
    <ProgressBar />
    <NavBar />
    <div className='container'>
      <div className='row'>
        <Routes />
      </div>
    </div>
  </div>
)

export default App
