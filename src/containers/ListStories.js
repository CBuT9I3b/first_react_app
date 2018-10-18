import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';

class ListStories extends Component {
  componentDidMount() {
    getItems(this.props.typeContent, 10)
  }
}

const mapStateToProps = state => {
  const { isLoading, isError, items, typeContent } = state
  return {
    isLoading,
    isError,
    items,
    typeContent
  }
}

export default connect(mapStateToProps)(ListStories);
