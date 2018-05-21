import React, { Component } from 'react';
import axios from 'axios';
import CountryFilter from './components/CountryFilter';
import CountryList from './components/CountryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: ''
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log('response', response);
      this.setState({ data: response.data });
    });
  }

  addFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        find countries: <CountryFilter filter={this.state.filter} input={this.addFilter} />
        <CountryList data={this.state.data} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
