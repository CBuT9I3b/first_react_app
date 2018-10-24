import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Progress, FormSort, Routes, NavBar } from '../components';

class App extends Component {
  render() {
    const { isLoading } = this.props
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-10'>
            { isLoading ? <Progress /> : null}
            <NavBar />
            <Header />
            <FormSort />
            <Routes />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { isLoading } = state.getContent
  return { isLoading }
}

export default connect(mapStateToProps)(App);
