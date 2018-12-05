import React from 'react';

const Article = props => {
  const { by, time, title, type, url } = props.data;
  const link = url ? url.split('/')[2] : 'sorry, no link';
  const date = new Date((time * 1000)).toLocaleString("en-US");
  return (
    <div className='col l12 m12 s12'>
      <div className='card hoverable blue-grey lighten-5'>
        <div className='card-content'>
          <span className='card-title'>{title}</span>
          <p>{type} by {by}</p>
          <small>{date}</small>
        </div>
        <div className='card-action'>
          <a href={url}>{link}</a>
        </div>
      </div>
    </div>
  )
};

export default Article;
