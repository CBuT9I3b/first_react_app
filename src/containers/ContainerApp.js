import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectTypeContent, getStoriesIfNeeded } from '../actions'
import { LinearProgress, NavBar, ListStories } from '../components'

class ContainerApp extends Component {
  componentDidMount() {
    let { type } = this.props.match.params
    let { dispatch, selectedType } = this.props
    if (type !== selectedType) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType) {
      dispatch(getStoriesIfNeeded(selectedType, 10))
    }
  }

  componentDidUpdate(prevProps) {
    let { type } = this.props.match.params
    let { dispatch, selectedType } = this.props
    if (type !== prevProps.match.params.type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType !== prevProps.selectedType) {
      dispatch(getStoriesIfNeeded(selectedType, 10))
    }
  }

  render() {
    let { isLoading, isError, items } = this.props
    return (
      <div>
        {isLoading ? <LinearProgress /> : null}
        <NavBar />
        <ListStories data={{isLoading, isError, items}} />
      </div>
    )
  }
}

ContainerApp.propTypes = {
  selectedType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  let { selectedType, contentByType } = state
  let { isLoading, isError, items } = contentByType[selectedType] || { isLoading: false, isError: false, items: []}
  return { selectedType, isLoading, isError, items }
}

export default connect(mapStateToProps)(ContainerApp)
