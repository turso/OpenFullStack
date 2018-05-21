import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topic: 'anna palautetta',
      statistic: 'statistiikka',
      hyva: 0,
      neutraali: 0,
      huono: 0,
      totalVotes: 0
    };
    this.addHyva = this.addHyva.bind(this);
    this.addNeutraali = this.addNeutraali.bind(this);
    this.addHuono = this.addHuono.bind(this);
  }

  addHyva = () => {
    this.setState(prevState => ({
      hyva: prevState.hyva + 1,
      totalVotes: prevState.totalVotes + 1
    }));
  };

  addNeutraali = () => {
    this.setState(prevState => ({
      neutraali: prevState.neutraali + 1,
      totalVotes: prevState.totalVotes + 1
    }));
  };

  addHuono = () => {
    this.setState(prevState => ({
      huono: prevState.huono + 1,
      totalVotes: prevState.totalVotes + 1
    }));
  };

  render() {
    const prosentti = () => {
      return (this.state.hyva / this.state.totalVotes * 100).toFixed(1);
    };

    const keskiarvo = () => {
      return ((this.state.hyva - this.state.huono) / this.state.totalVotes).toFixed(1);
    };

    return (
      <div>
        <h1>{this.state.topic}</h1>
        <br />
        <button onClick={this.addHyva}>Hyvä</button>
        <button onClick={this.addNeutraali}>Neutraali</button>
        <button onClick={this.addHuono}>Huono</button>
        <br />
        <h1>{this.state.statistic}</h1>
        <br />
        <div>Hyvä {this.state.hyva}</div>
        <div>Neutraali {this.state.neutraali}</div>
        <div>Huono {this.state.huono}</div>
        <div>Keskiarvo {keskiarvo()}</div>
        <div>Positiviisia {prosentti()}% </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
