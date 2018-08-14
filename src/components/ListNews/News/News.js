import React from 'react';

const News = ({data}) => {
  const itemsList = data.map((item, index) => {
    let url = 'sorry, no link';
    if (item.url) {
      url = item.url.split('/')[2]
    }
    let date = new Date((item.time * 1000)).toLocaleString("en-US")
    return (
      <div className='card border-info mb-2' key={index}>
        <div className='card-header text-white bg-info'>
          <div className='row justify-content-between'>
            <div className='col card-text'>
              <p>{item.type} by {item.by}</p>
            </div>
            <div className='col-auto'>
              <button className='btn btn-warning'><i className='far fa-star'></i></button>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text'>
            <a className='card-link' href={item.url}>{url}</a>
          </p>
        </div>
        <div className='card-footer'>
          <p className='card-text'>
            <small className='text-muted'>{date}</small>
          </p>
        </div>
      </div>
    )
  });

  return (
    <div>{itemsList}</div>
  )
};

export default News;
