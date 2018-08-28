import React from 'react';

const FormSord = (props) => {
  return (
    <div className='form-group row mb-2'>
      <label className='col-md-auto col-form-label'>List</label>
      <div className='col-md-auto'>
        <select className='form-control' defaultValue={props.filter} onChange={props.checkedFilter}>
          <option value='top'>Top news</option>
          <option value='best'>Best news</option>
          <option value='new'>New news</option>
        </select>
      </div>
      <label className='col-md-auto col-form-label'>Quantity news on page</label>
      <div className='col-md-auto'>
        <select className='form-control' defaultValue={props.quantity} onChange={props.checkedQuantity}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
      </div>
    </div>
  )
};

export default FormSord;
