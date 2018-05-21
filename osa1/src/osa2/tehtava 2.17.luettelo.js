import React from 'react';
import SearchFilter from './components/SeachFilter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import personService from './services/Luettelo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      newId: '',
      filter: ''
    };
  }

  componentDidMount() {
    personService.getAll().then(response => {
      this.setState({ persons: response.data });
    });
  }

  addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.newId
    };

    console.log('personObject', personObject);

    const isNameAlready = this.state.persons.map(person => person.name).includes(this.state.newName);

    if (isNameAlready) {
      if (window.confirm(this.state.newName + ' on jo luettelossa, korvataanko vanha numero uudella?')) {
        personService.getAll().then(response => {
          const oldData = response.data.find(person => person.name === this.state.newName);

          personService.update(oldData.id, personObject).then(response => {
            this.setState({
              persons: this.state.persons.map(person => (person.id !== oldData.id ? person : personObject)),
              newName: '',
              newNumber: '',
              newId: ''
            });
          });
        });
      }
    } else {
      personService.create(personObject).then(response => {
        this.setState({
          persons: this.state.persons.concat(personObject),
          newName: ''
        });
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

  removePerson = (id, name) => {
    const message = `poistetaanko ${name} ?`;

    if (window.confirm(message)) {
      personService
        .destroy(id)
        .then(response => {
          personService.getAll().then(response => {
            this.setState({ persons: response.data });
          });
        })
        .catch(error => {
          console.log('fail!');
        });
    }
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
        <PersonList persons={this.state.persons} filter={this.state.filter} removePerson={this.removePerson} />
      </div>
    );
  }
}

export default App;
