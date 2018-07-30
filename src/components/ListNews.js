import React, { Component } from 'react';
import hacker from './request/hackerNews';
import News from './News';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'top',
      items: []
    };
  }

  fetchNews(filter) {
    const itemsList = [];

    hacker.listStory(filter)
    .then(response => {
      response.data.slice(0, 5).forEach(id => {
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
  };

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
        <div className='form-group row mb-2'>
          <label className='col-1 col-form-label'>List</label>
          <div className='col-2'>
            <select className='form-control' defaultValue={this.state.filter} onChange={this.checkedFilter}>
              <option value='top'>Top news</option>
              <option value='best'>Best news</option>
              <option value='new'>New news</option>
            </select>
          </div>
        </div>
        <News data={this.state.items} />
      </div>
    )
  }
}

export default ListNews;
