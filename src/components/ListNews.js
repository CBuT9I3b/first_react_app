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
        var itemsTitle = []

        hacker.new()
        .then(response => {
            response.data.forEach(id => {
                hacker.story(id)
                .then(response => {
                    itemsTitle.push(response.data.title)
                })
                .catch(error => {
                    console.log(error)
                })
                .then(() => {
                    this.setState({items: itemsTitle})
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
