import React from 'react';
import EstateCard from './estateCard';

const ListEstate = ({ estates, onDelete }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {estates.map((estate) => (
          <div className="col-md-7 mb-4" key={estate.id}>
            <EstateCard estate={estate} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListEstate;
