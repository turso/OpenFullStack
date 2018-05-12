import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: 'anna palautetta',
      statistic: 'statistiikka',
      hyva: 0,
      neutraali: 0,
      huono: 0,
      totalVotes: 0
    };
    this.addValue = this.addValue.bind(this);
  }

  addValue = (arvo, kokonaisArvo, nappi) => {
    if (nappi === 'hyva') {
      this.setState({ hyva: arvo, totalVotes: kokonaisArvo });
    } else if (nappi === 'neutraali') {
      this.setState({ neutraali: arvo, totalVotes: kokonaisArvo });
    } else if (nappi === 'huono') {
      this.setState({ huono: arvo, totalVotes: kokonaisArvo });
    }
  };

  render() {
    const Statistics = () => {
      if (this.state.totalVotes !== 0) {
        return (
          <table>
            <tbody>
              <tr>
                <Statistic name="Hyvä" result={this.state.hyva} />
              </tr>
              <tr>
                <Statistic name="Neutraali" result={this.state.neutraali} />
              </tr>
              <tr>
                <Statistic name="Huono" result={this.state.huono} />
              </tr>
              <tr>
                <Statistic name="Keskiarvo" result={keskiarvo()} />
              </tr>
              <tr>
                <Statistic name="Positiivisia" result={prosentti()} merkki="%" />
              </tr>
            </tbody>
          </table>
        );
      }

      return <div>ei yhtään palautetta annettu</div>;
    };

    const Statistic = props => {
      return (
        <td>
          {props.name} {props.result}
          {props.merkki}
        </td>
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
        <Button text="Hyvä" handleClick={this.addValue(this.state.hyva + 1, this.state.totalVotes + 1, 'hyva')} />
        <Button
          text="Neutraali"
          handleClick={this.addValue(this.state.neutraali + 1, this.state.totalVotes + 1, 'neutraali')}
        />
        <Button text="Huono" handleClick={this.addValue(this.state.huono + 1, this.state.totalVotes + 1, 'huono')} />
        <br />
        <h1>{this.state.statistic}</h1>
        <Statistics />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
