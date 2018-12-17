import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectTypeContent, getStoriesIfNeeded } from '../actions'
import { ListStories } from '../components'

class ContainerListStories extends Component {
  componentDidMount() {
    const { dispatch, type, selectedType } = this.props
    if (selectedType !== type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType) {
      dispatch(getStoriesIfNeeded(selectedType, 10))
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, type, selectedType } = this.props;
    if (type !== prevProps.type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType !== prevProps.selectedType) {
      dispatch(getStoriesIfNeeded(selectedType, 10))
    }
  }

  render() {
    const { isLoading, isError, items } = this.props
    return (
      <ListStories data={{ isLoading, isError, items }} />
    )
  }
}

ContainerListStories.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  const { selectedType, contentByType } = state
  const { isLoading, isError, items } = contentByType[selectedType] || { isLoading: false, isError: false, items: [] }
  return { isLoading, isError, items, selectedType }
}

export default connect(mapStateToProps)(ContainerListStories)
