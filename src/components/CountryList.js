import React from 'react';

const CountryList = ({ data, filter }) => {
  const countryToShow =
    filter === ''
      ? data
      : data.filter(country => {
          return country.name.indexOf(filter) !== -1;
        });

  const showDetails = country => {
    console.log('KLIKATTU!!');
    console.log('country', country);
    console.log('nimi', country.name);
    return (
      <div>
        <div>
          <h1>
            {country.name} {country.nativeName}
          </h1>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <p>
            <img alt="flag" src={country.flag} />
          </p>
        </div>
      </div>
    );
  };

  if (countryToShow.length === 1) {
    return (
      <div>
        {countryToShow.map(country => (
          <div key={country.alpha2Code}>
            <h1>
              {country.name} {country.nativeName}
            </h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <p>
              <img alt="flag" src={country.flag} />
            </p>
          </div>
        ))}
      </div>
    );
  } else if (countryToShow.length > 10) {
    return <div>too many matches, specify another filter</div>;
  } else {
    return (
      <div>
        {countryToShow.map(country => (
          <div key={country.alpha2Code} onClick={() => showDetails(country)}>
            {country.name}
          </div>
        ))}
      </div>
    );
  }
};

export default CountryList;
