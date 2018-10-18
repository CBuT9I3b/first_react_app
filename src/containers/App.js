import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
}

const mapStateToProps = state => {
  const { isLoading } = state
  return { isLoading }
}

export default connect(mapStateToProps)(App);
