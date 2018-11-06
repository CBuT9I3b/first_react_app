import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStories } from '../actions';
import { Article } from '../components';

class ListStories extends Component {
  componentDidMount() {
    const { dispatch, type } = this.props
    dispatch(getStories(type, 10))
  }

  componentDidUpdate(prevProps) {
    const { dispatch, type } = this.props;
    if (type !== prevProps.type) {
      dispatch(getStories(type, 10))
    }
  }

  render() {
    const { isLoading, isError, items } = this.props
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>{isError}</div>
    }
    if (items.length !== 0) {
      return items.map(item => <Article data={item} key={item.id} />)
    }
    return null
  }
}

ListStories.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  const { isLoading, isError, items } = state.getContent
  return { isLoading, isError, items }
}

export default connect(mapStateToProps)(ListStories);
