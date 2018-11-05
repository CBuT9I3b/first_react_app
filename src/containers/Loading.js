import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { isLoading } = state.getContent
  return { isLoading }
}

export default connect(mapStateToProps)(Loading);
