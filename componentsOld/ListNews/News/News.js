import React from 'react';

const News = props => {
  const { by, time, title, type, url } = props.data;
  const link = url ? url.split('/')[2] : 'sorry, no link';
  const date = new Date((time * 1000)).toLocaleString("en-US");
  return (
    <div className='card border-light mb-3'>
        <div className='card-header bg-light'>
          {type} by {by}
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            <a className='card-link' href={url}>{link}</a>
          </p>
        </div>
        <div className='card-footer'>
          <small className='text-muted'>{date}</small>
        </div>
    </div>
  )
};

export default News;
