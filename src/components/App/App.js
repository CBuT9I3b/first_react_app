import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import ListNews from '../ListNews';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-10'>
            <header>
              <h1>React Hacker News <span className="badge badge-info">By Mike</span></h1>
            </header>
            <ListNews />
            <footer></footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
