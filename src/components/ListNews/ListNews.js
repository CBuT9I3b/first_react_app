import React, { Component } from 'react';
import { HackerNewsApi } from '../../api';
import News from './News';
import FormSort from './FormSort';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'top',
      quantity: 5,
      items: [],
      isLoading: false
    };
  }

  fetchNews = (filter, quantity) => {
    this.setState({
      isLoading: true
    });
    HackerNewsApi.getAllStory(filter, quantity)
      .then(response => this.setState({
        items: response,
        isLoading: false
      }))
  };

  checkedFilter = event => this.setState({
    filter: event.target.value
  });

  checkedQuantity = event => this.setState({
    quantity: +event.target.value
  });

  componentDidMount() {
    this.fetchNews(this.state.filter, this.state.quantity)
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.filter !== prevState.filter) ||
      (this.state.quantity !== prevState.quantity) ||
      (this.props.type !== prevProps.type)) {
      this.fetchNews(this.state.filter, this.state.quantity)
    }
  }

  render() {
    const { filter, quantity, items, isLoading } = this.state;
    return (
      <div>
        <FormSort
          filter={filter}
          quantity={quantity}
          checkedFilter={this.checkedFilter.bind(this)}
          checkedQuantity={this.checkedQuantity.bind(this)}
        />

        {isLoading? <div className='text-center'>Loading...</div> :
          items.map(item => (
            <News
              data={item}
              key={item.id}
            />
          ))
        }
      </div>
    )
  }
}

export default ListNews;
