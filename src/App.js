import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>Header</header>
        <News />
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
