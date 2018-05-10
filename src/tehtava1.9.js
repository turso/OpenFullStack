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
    const Statistics = () => {
      if (this.state.totalVotes !== 0) {
        return (
          <div>
            <Statistic name="Hyvä" result={this.state.hyva} />
            <Statistic name="Neutraali" result={this.state.neutraali} />
            <Statistic name="Huono" result={this.state.huono} />
            <Statistic name="Keskiarvo" result={keskiarvo()} />
            <Statistic name="Positiivisia" result={prosentti()} merkki="%" />
          </div>
        );
      }

      return <div>ei yhtään palautetta annettu</div>;
    };

    const Statistic = props => {
      return (
        <div>
          {props.name} {props.result}
          {props.merkki}
        </div>
      );
    };

    const Button = props => <button onClick={props.handleClick}>{props.text}</button>;

    const prosentti = () => {
      return (this.state.hyva / this.state.totalVotes * 100).toFixed(1);
    };

    const keskiarvo = () => {
      return ((this.state.hyva - this.state.huono) / this.state.totalVotes).toFixed(1);
    };

    return (
      <div>
        <h1>{this.state.topic}</h1>
        <Button text="Hyvä" handleClick={this.addHyva} />
        <Button text="Neutraali" handleClick={this.addNeutraali} />
        <Button text="Huono" handleClick={this.addHuono} />
        <br />
        <h1>{this.state.statistic}</h1>
        <Statistics />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
