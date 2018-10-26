import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from '../components';

class Loading extends Component {
  render() {
    const { isLoading } = this.props
    return (
      isLoading ? <Progress /> : null
    )
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.getContent
  return { isLoading }
}

export default connect(mapStateToProps)(Loading);
