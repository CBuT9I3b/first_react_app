import React from 'react';

const News = ({data}) => {
  const itemsList = data.map((item, index) => {
    return (
      <div className='card border-info' key={index}>
        <div className='card-body'>
          <h5 className='card-title'>{item.title}</h5>
          <div>
            {item.type} by {item.by} to <a className='card-link' href={item.url}>{item.url.split('/')[2]}</a>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className='card-columns'>{itemsList}</div>
  )
};

export default News;
