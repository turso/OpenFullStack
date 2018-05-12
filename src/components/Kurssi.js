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
        <div key={kurssi.id}>
          <Otsikko otsikko={kurssi.nimi} />
          <Sisalto kurssi={kurssi.osat} />
          <Yhteensa kurssit={kurssi.osat} />
        </div>
      ))}
    </div>
  );
};

export default Kurssi;
