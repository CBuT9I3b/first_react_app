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
    const { items, isError, isLoading } = this.props
    if (isError) {
      return (
        <div>{isError}</div>
      )
    }
    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }
    return [
      items.map(item => <Article data={item} key={item.id} />)
    ]
  }
}

ListStories.propTypes = {
  items: PropTypes.array.isRequired,
  typeContent: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { isLoading, isError, items, typeContent } = state.getContent
  return {
    isLoading,
    isError,
    items,
    typeContent
  }
}

export default connect(mapStateToProps)(ListStories);
