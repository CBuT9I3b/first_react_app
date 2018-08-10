import React, { Component } from 'react';
import newsBase from './firebase/firebase';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      items: []
    };
  }

  fetchNews(quantity) {
    newsBase.readNews(quantity)
    .then(snapshot => {
      this.setState({items: snapshot})
    })
  }

  checkedQuantity = (event) => {
    this.setState({quantity: event.target.value})
  }

  componentDidMount() {
    this.fetchNews(this.state.quantity)
  }

  componentDidUpdate(_, prevState) {
    if (this.state.quantity !== prevState.quantity) {
      this.fetchNews(this.state.quantity)
    }
  }

  render() {
    const items = this.state.items
    const itemsList = items.map((item, index) => {
      return (
        <div className='card border-info mb-2' key={index}>
          <div className='card-body'>
            <h5 className='card-title'>{item.title}</h5>
            <div>
              {item.id}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className='form-group row mb-2'>
          <label className='col-md-auto col-form-label'>Quantity news on page</label>
          <div className='col-md-auto'>
            <select className='form-control' defaultValue={this.state.quantity} onChange={this.checkedQuantity}>
              <option value='1'>1</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        {itemsList}
      </div>
    )
  }
}

export default ListNews;
