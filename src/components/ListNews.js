import React, { Component } from 'react';
import hacker from './request/hackerNews';
import News from './News';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addDate() {
    var itemsList = []

    hacker.new()
    .then(response => {
      response.data.slice(0, 10).forEach(id => {
        hacker.story(id)
        .then(response => {
          itemsList.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => {
          this.setState({items: itemsList})
        })
      })
    })
  }

  componentWillMount() {
    this.addDate()
  }

  render() {
    return (
      <div>
        <div>List News</div>
        <News data={this.state.items} />
      </div>
    )
  }
}

export default ListNews;
