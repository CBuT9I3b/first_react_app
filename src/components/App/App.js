import React from 'react'

import { Routes, NavBar } from '..'
import { ContainerHeader } from '../../containers'

const App = () => (
  <div>
    <ContainerHeader />
    <NavBar />
    <div className='container'>
      <div className='row'>
        <Routes />
      </div>
    </div>
  </div>
)

export default App
