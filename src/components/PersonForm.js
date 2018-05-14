import React from 'react';

const PersonForm = ({ addPerson, newName, addNewName, newNumber, addNewNumber }) => {
  return (
    <form onSubmit={addPerson}>
      <h1>Lisää uusi</h1>
      <div>
        nimi: <input value={newName} onChange={addNewName} />
      </div>
      <div>
        numero: <input value={newNumber} onChange={addNewNumber} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  );
};

export default PersonForm;
