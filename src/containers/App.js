import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListStories from './ListStories';
import { Header, Progress } from '../components';

class App extends Component {
  render() {
    const { isLoading } = this.props
    return (
      <div>
        { isLoading ? <Progress /> : null}
        <Header />
        <ListStories />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.getContent
  return { isLoading }
}

export default connect(mapStateToProps)(App);
