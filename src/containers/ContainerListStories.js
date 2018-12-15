import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectTypeContent, getStoriesIfNeeded } from '../actions'
import { Article } from '../components'

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
    if (isLoading) {
      return <Article data={{text: 'Loading...'}} />
    }
    if (isError) {
      return <Article data={{title: "Error", text: isError}} />
    }
    if (items.length !== 0) {
      return items.map(item => item ? <Article data={item} key={item.id} /> : null)
    }
    return null
  }
}

ContainerListStories.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  const { selectedType, contentByType } = state
  const { isLoading, isError, items } = contentByType[selectedType] || { isLoading: false, isError: false, items: []}
  return { isLoading, isError, items, selectedType }
}

export default connect(mapStateToProps)(ContainerListStories)
