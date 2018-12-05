import React from 'react';

const Article = props => {
  const { by, time, title, type, url } = props.data
  const titleCard = title ? <span className='card-title'>{title}</span> : null
  const typeAndAuthor = (type && by) ? <p>{type} by {by}</p> : null
  const date = time ? <small>{new Date((time * 1000)).toLocaleString("en-US")}</small> : null
  const link = url ? <div className='card-action'><a href={url}>{url.split('/')[2]}</a></div> : null
  return (
    <div className='col l12 m12 s12'>
      <div className='card hoverable blue-grey lighten-5'>
        <div className='card-content'>
          {titleCard}
          {typeAndAuthor}
          {date}
        </div>
        {link}
      </div>
    </div>
  )
};

export default Article;
