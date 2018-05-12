import React from 'react';

const Otsikko = ({ kurssi }) => {
  return <h1>{kurssi.nimi}</h1>;
};

const Sisalto = ({ kurssi }) => {
  return <div>{kurssi.osat.map(kurssi => <Osa key={kurssi.id} kurssi={kurssi} />)}</div>;
};

const Osa = ({ kurssi }) => {
  return (
    <p>
      {kurssi.nimi} {kurssi.tehtavia}
    </p>
  );
};

const Yhteensa = ({ kurssi }) => {
  return (
    <div>
      Yhteensä{' '}
      {kurssi.osat.map(kurssi => kurssi.tehtavia).reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0)}{' '}
      Tehtävää
    </div>
  );
};

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  );
};

export default Kurssi;
