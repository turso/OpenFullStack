import React from 'react';

const CountryFilter = ({ filter, input }) => {
  console.log('filter', filter);
  return <input value={filter} onChange={input} />;
};

export default CountryFilter;
