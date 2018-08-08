import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListNews from './components/ListNews';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col'>
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
