import React from 'react';
import { typeStories } from '../../api';

const FormSord = props => {
  const { filter, quantity, checkedFilter, checkedQuantity } = props;
  return (
    <div className='form-group row mb-3'>
      <label className='col-md-auto col-form-label'>List</label>
      <div className='col-md-auto'>
        <select className='form-control' defaultValue={filter} onChange={checkedFilter}>
          <option value={typeStories.TOP}>Top news</option>
          <option value={typeStories.BEST}>Best news</option>
          <option value={typeStories.NEW}>New news</option>
        </select>
      </div>
      <label className='col-md-auto col-form-label'>Quantity news on page</label>
      <div className='col-md-auto'>
        <select className='form-control' defaultValue={quantity} onChange={checkedQuantity}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  )
};

export default FormSord;
