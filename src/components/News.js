import React, { Component } from 'react';
import space from './request/hackerNews';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'News'
        };
    }

    addData() {
        space.then(response => {
            console.log(response.data)
            this.setState({data: response.data.title})
        })
    }

    componentDidMount() {
        this.addData()
    }

    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}

export default News;
