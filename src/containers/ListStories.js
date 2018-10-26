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
    const { items, isError } = this.props
    if (isError) {
      return (
        <div>{isError}</div>
      )
    }
    return [
      items.map(item => <Article data={item} key={item.id} />)
    ]
  }
}

ListStories.propTypes = {
  items: PropTypes.array.isRequired,
  typeContent: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  const { isError, items } = state.getContent
  return { isError, items}
}

export default connect(mapStateToProps)(ListStories);
