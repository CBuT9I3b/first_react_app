import React, { Component } from 'react';
import hacker from './request/hackerNews';
import News from './News';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'new',
      items: []
    }
  }

  fetchNews(filter) {
    var itemsList = []

    hacker.listStory(filter)
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

  checkedFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  componentDidMount() {
    this.fetchNews(this.state.filter)
  }

  componentDidUpdate(_, prevState) {
    if (this.state.filter !== prevState.filter) {
      this.fetchNews(this.state.filter)
    }
  }

  render() {
    return (
      <div>
        <div>
          List
          <select defaultValue={this.state.filter} onChange={this.checkedFilter}>
            <option value='top'>Top</option>
            <option value='best'>Best</option>
            <option value='new'>New</option>
          </select>
        </div>
        <News data={this.state.items} />
      </div>
    )
  }
}

export default ListNews;
