import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../actions";

class ListStories extends Component {
  componentDidMount() {
    getItems("new", 10)
  }
}

const mapStateToProps = state => {
  const { isLoading, isError, items } = state
  return {
    isLoading,
    isError,
    items
  }
}

export default connect(mapStateToProps)(ListStories);
