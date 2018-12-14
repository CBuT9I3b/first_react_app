import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LinearProgress } from '../components'

class ProgressBar extends Component {
  render() {
    const { isLoading } = this.props
    if (isLoading) {
      return <LinearProgress />
    }
    return null
  }
}

ProgressBar.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { selectedType, contentByType } = state
  const { isLoading } = contentByType[selectedType] || { isLoading: false}
  return { isLoading }
}

export default connect(mapStateToProps)(ProgressBar)
