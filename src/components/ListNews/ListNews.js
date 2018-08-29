import React, { Component } from 'react';
import hacker from '../../request';
import newsBase from '../../firebase';
import News from './News';
import FormSort from './FormSort';


class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'top',
      quantity: 5,
      items: []
    };
  }

  addedFavList = item => {
    newsBase.writeNews(item)
  };

  fetchNews = (filter, quantity) => {
    hacker.newListStory(filter, quantity)
      .then(response => this.setState({
        items: response
      }))
  };

  checkedFilter = event => this.setState({
    filter: event.target.value
  });

  checkedQuantity = event => this.setState({
    quantity: event.target.value
  });

  componentDidMount() {
    this.fetchNews(this.state.filter, this.state.quantity)
  }

  componentDidUpdate(_, prevState) {
    if ((this.state.filter !== prevState.filter) || (this.state.quantity !== prevState.quantity)) {
      this.fetchNews(this.state.filter, this.state.quantity)
    }
  }

  render() {
    const { filter, quantity, items } = this.state;
    return (
      <div>
        <FormSort
          filter={filter}
          quantity={quantity}
          checkedFilter={this.checkedFilter.bind(this)}
          checkedQuantity={this.checkedQuantity.bind(this)}
        />

        {items.map(item => (
          <News
            addedFavList={this.addedFavList.bind(this, item)}
            data={item}
            key={item.id}
          />
        ))}
      </div>
    )
  }
}

export default ListNews;
