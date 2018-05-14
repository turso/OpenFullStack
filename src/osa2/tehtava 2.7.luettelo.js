import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: 'Arto Hellas' }],
      newName: ''
    };
  }

  addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: this.state.newName
    };

    const isNameAlready = this.state.persons.map(person => person.name).includes(this.state.newName);

    if (isNameAlready) {
      this.setState({
        newName: ''
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

  addNewPerson = event => {
    this.setState({ newName: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.addNewPerson} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>{this.state.persons.map(person => <p key={person.name}>{person.name}</p>)}</div>
      </div>
    );
  }
}

export default App;
