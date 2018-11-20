import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTypeContent, getStoriesIfNeeded } from '../actions';
import { Article } from '../components';

class ListStories extends Component {

  componentDidMount() {
    const { dispatch, selectType, type } = this.props
    dispatch(selectTypeContent(type))
    dispatch(getStoriesIfNeeded(selectType, 10))
  }

  componentDidUpdate(prevProps) {
    const { dispatch, selectType, type } = this.props;
    if (selectType !== prevProps.selectType) {
      dispatch(getStoriesIfNeeded(selectType, 10))
    }
    if (type !== prevProps.type) {
      dispatch(selectTypeContent(type))
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
  const { selectType, contentByType } = state
  const { isLoading, isError, items } = contentByType[selectType] || { isLoading: true, isError: false, items: []}
  return { isLoading, isError, items, selectType }
}

export default connect(mapStateToProps)(ListStories);
