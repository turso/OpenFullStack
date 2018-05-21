import React from 'react';
import SearchFilter from './components/SeachFilter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

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
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <SearchFilter filter={this.state.filter} addFilter={this.addFilter} />
        <PersonForm
          addPerson={this.addPerson}
          newName={this.state.newName}
          addNewName={this.addNewName}
          newNumber={this.stateNewNumber}
          addNewNumber={this.addNewNumber}
        />
        <h2>Numerot</h2>
        <PersonList persons={this.state.persons} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
