import React from 'react';

const News = ({data}) => {
    const items = data
    const itemsNews = items.map((item, index) => {
        return (
            <div key={index}>
            {item}
            </div>
        )
    })
    
    console.log("render")
    
    return (
        <div>{itemsNews}</div>
    )
}

export default News;
