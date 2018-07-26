import React from 'react';

const News = ({data}) => {
  const itemsNews = data.map((item, index) => {
    return (
      <div key={index}>
        <div>Title: {item.title}</div>
        <div>
          <a href={item.url}>URL</a>
        </div>
        <div>Author: {item.by}</div>
      </div>
    )
  })

  console.log('render')

  return (
    <div>{itemsNews}</div>
  )
}

export default News;
