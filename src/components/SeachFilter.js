import React from 'react';

const SearchFilter = ({ filter, addFilter }) => {
  return (
    <div>
      rajaa näytettäviä <input value={filter} onChange={addFilter} />
    </div>
  );
};

export default SearchFilter;
