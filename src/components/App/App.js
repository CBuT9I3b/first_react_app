import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { ListNews } from '..';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-10'>
            <header className='jumbotron'>
              <h1>React News</h1>
            </header>
            <ListNews />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
