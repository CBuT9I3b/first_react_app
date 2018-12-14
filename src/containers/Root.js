import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import configureStore from '../store'
import { App } from '../components'
// import { ContainerApp } from '../containers'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

// const Root = () => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/' render={() => <Redirect from='/' to='/new' />} />
//         <Route path='/:type(new|top|best|ask|show|job)' component={ContainerApp} />
//         <Route path='/about' component={ContainerApp} />
//         <Route path='*' component={ContainerApp} />
//       </Switch>
//     </BrowserRouter>
//   </Provider>
// )

export default Root
