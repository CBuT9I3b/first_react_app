import React from 'react';

const Article = props => {
  const { by, time, title, type, url } = props.data;
  const link = url ? url.split('/')[2] : 'sorry, no link';
  const date = new Date((time * 1000)).toLocaleString("en-US");
  return (
    <div>
        <div>
          {type} by {by}
        </div>
        <div>
          <h5>{title}</h5>
          <p>
            <a href={url}>{link}</a>
          </p>
        </div>
        <div>
          <small>{date}</small>
        </div>
    </div>
  )
};

export default Article;
