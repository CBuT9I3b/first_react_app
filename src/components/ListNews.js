import React, { Component } from 'react';
import hacker from './request/hackerNews';
import News from './News';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'top',
      quantity: 5,
      items: []
    };
  }

  fetchNews(filter, quantity) {
    const itemsList = [];

    hacker.listStory(filter)
    .then(response => {
      response.data.slice(0, quantity).forEach(id => {
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

  checkedQuantity = (event) => {
    this.setState({quantity: event.target.value})
  }

  componentDidMount() {
    this.fetchNews(this.state.filter, this.state.quantity)
  }

  componentDidUpdate(_, prevState) {
    if ((this.state.filter !== prevState.filter) || (this.state.quantity !== prevState.quantity)) {
      this.fetchNews(this.state.filter, this.state.quantity)
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
          <label className='col-1 col-form-label'>Quantity</label>
          <div className='col-2'>
            <select className='form-control' defaultValue={this.state.quantity} onChange={this.checkedQuantity}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='50'>50</option>
            </select>
          </div>
        </div>
        <News data={this.state.items} />
      </div>
    )
  }
}

export default ListNews;
