import React from 'react';

const Otsikko = ({ otsikko }) => {
  return <h1>{otsikko}</h1>;
};

const Sisalto = ({ kurssi }) => {
  console.log(kurssi);
  return <div>{kurssi.map(kurssi => <Osa key={kurssi.id} kurssi={kurssi} />)}</div>;
};

const Osa = ({ kurssi }) => {
  return (
    <p>
      {kurssi.nimi} {kurssi.tehtavia}
    </p>
  );
};

const Yhteensa = ({ kurssit }) => {
  return (
    <div>
      Yhteensä{' '}
      {kurssit.map(kurssi => kurssi.tehtavia).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}{' '}
      Tehtävää
    </div>
  );
};

const Kurssi = ({ kurssit }) => {
  return (
    <div>
      {kurssit.map(kurssi => (
        <div>
          <Otsikko key={kurssi.id} otsikko={kurssi.nimi} />
          <Sisalto key={kurssi.osat.id} kurssi={kurssi.osat} />
          <Yhteensa key={kurssi.nimi} kurssit={kurssi.osat} />
        </div>
      ))}
    </div>
  );
};

export default Kurssi;
