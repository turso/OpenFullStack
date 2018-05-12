import React from 'react';

const Otsikko = props => {
  return <h1>{props.kurssi.nimi}</h1>;
};

const Sisalto = props => {
  return <div>{props.kurssi.osat.map(kurssi => <Osa key={kurssi.id} kurssi={kurssi} />)}</div>;
};

const Osa = ({ kurssi }) => {
  return (
    <p>
      {kurssi.nimi} {kurssi.tehtavia}
    </p>
  );
};

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
    </div>
  );
};

export default Kurssi;
