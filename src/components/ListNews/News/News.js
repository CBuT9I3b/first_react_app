import React from 'react';

const News = props => {
  const { by, time, title, type, url } = props.data;
  const link = url ? url.split('/')[2] : 'sorry, no link';
  const date = new Date((time * 1000)).toLocaleString("en-US");
  return (
    <div className='card border-info mb-2'>
        <div className='card-header text-white bg-info'>
          <div className='row justify-content-between'>
            <div className='col card-text'>
              <p>{type} by {by}</p>
            </div>
            <div className='col-auto'>
              <button onClick={props.addedFavList} className='btn btn-warning'><i className='far fa-star'></i></button>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            <a className='card-link' href={url}>{link}</a>
          </p>
        </div>
        <div className='card-footer'>
          <p className='card-text'>
            <small className='text-muted'>{date}</small>
          </p>
        </div>
    </div>
  )
};

export default News;
