import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    };
  }

  addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    };

    const isNameAlready = this.state.persons.map(person => person.name).includes(this.state.newName);

    if (isNameAlready) {
      this.setState({
        newName: '',
        newNumber: ''
      });
      alert('Nimi on jo listassa!');
    } else {
      const persons = this.state.persons.concat(personObject);
      this.setState({
        persons,
        newName: ''
      });
    }
  };

  addNewName = event => {
    this.setState({ newName: event.target.value });
  };

  addNewNumber = event => {
    this.setState({ newNumber: event.target.value });
  };

  addFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const personsToShow =
      this.state.filter === ''
        ? this.state.persons
        : this.state.persons.filter(person => {
            return person.name.indexOf(this.state.filter) !== -1;
          });

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          rajaa näytettäviä <input value={this.state.filter} onChange={this.addFilter} />
        </div>
        <form onSubmit={this.addPerson}>
          <h1>Lisää uusi</h1>
          <div>
            nimi: <input value={this.state.newName} onChange={this.addNewName} />
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.addNewNumber} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          {personsToShow.map(person => (
            <p key={person.name}>
              {person.name} {person.number}{' '}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
