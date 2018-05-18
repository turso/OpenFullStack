import React from 'react';
import axios from 'axios';
import SearchFilter from './components/SeachFilter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    };
  }

  componentDidMount() {
    console.log('didmount!');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fullfilled');
      console.log('response', response);
      this.setState({ persons: response.data });
    });
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
      axios.post('http://localhost:3001/persons', personObject).then(response => {
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
