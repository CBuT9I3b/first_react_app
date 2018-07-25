import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListNews from './components/ListNews';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>React Hacker News</header>
        <ListNews />
        <footer>By Mike</footer>
      </div>
    )
  }
}

export default App;
