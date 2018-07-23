import React from 'react';

const PersonList = ({ persons, filter, removePerson }) => {
  const personsToShow =
    filter === ''
      ? persons
      : persons.filter(person => {
          return person.name.indexOf(filter) !== -1;
        });

  console.log('PERSONSTOSHOW', personsToShow);

  return (
    <div>
      {personsToShow.map(person => (
        <p key={person.name}>
          {person.name} {person.number} <button onClick={() => removePerson(person.id, person.name)}>poista</button>
        </p>
      ))}
    </div>
  );
};

export default PersonList;
