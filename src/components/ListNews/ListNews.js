import React, { Component } from 'react';
import hacker from '../../request';
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

  addedFavList = () => {
    alert('+')
  }

  fetchNews = (filter, quantity) => {
    hacker.newListStory(filter, quantity)
    .then(response => this.setState({items: response}))
  }

  checkedFilter = event => this.setState({
    filter: event.target.value
  })

  checkedQuantity = event => this.setState({
    quantity: event.target.value
  })

  componentDidMount() {
    this.fetchNews(this.state.filter, this.state.quantity)
  }

  componentDidUpdate(_, prevState) {
    if ((this.state.filter !== prevState.filter) || (this.state.quantity !== prevState.quantity)) {
      this.fetchNews(this.state.filter, this.state.quantity)
    }
  }

  render() {
    const { filter, quantity, items } = this.state
    return (
      <div>
        <div className='form-group row mb-2'>
          <label className='col-md-auto col-form-label'>List</label>
          <div className='col-md-auto'>
            <select className='form-control' defaultValue={filter} onChange={this.checkedFilter}>
              <option value='top'>Top news</option>
              <option value='best'>Best news</option>
              <option value='new'>New news</option>
            </select>
          </div>
          <label className='col-md-auto col-form-label'>Quantity news on page</label>
          <div className='col-md-auto'>
            <select className='form-control' defaultValue={quantity} onChange={this.checkedQuantity}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='50'>50</option>
            </select>
          </div>
        </div>

        {items.map(item => {
          return (
            <News
              addedFavList={this.addedFavList.bind(this)}
              data={item}
              key={item.id}
            />
          )
        })}

      </div>
    )
  }
}

export default ListNews;
