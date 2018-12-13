import React from 'react';

const FormSort = props => {
  const { quantity, checkedQuantity } = props;
  return (
    <div>
      <label>Quantity news on page</label>
      <div>
        <select defaultValue={quantity} onChange={checkedQuantity} disabled>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  )
};

export default FormSort;
