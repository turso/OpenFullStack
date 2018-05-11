import React from 'react';
import ReactDOM from 'react-dom';

const VoteCount = props => {
  return <div>has {props.selectedAnectode} votes</div>;
};

const Button = props => <button onClick={props.handleClick}>{props.text}</button>;

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      votes: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };
    this.changeAnectdote = this.changeAnectdote.bind(this);
  }

  changeAnectdote = () => {
    this.setState(prevState => ({
      selected: Math.floor(Math.random() * 6)
    }));
  };

  addVote = () => {
    const voteList = { ...this.state.votes };
    voteList[this.state.selected] += 1;
    this.setState(prevState => ({
      votes: voteList
    }));
  };

  render() {
    return (
      <div>
        <div>{this.props.anecdotes[this.state.selected]}</div>
        <br />
        <VoteCount selectedAnectode={this.state.votes[this.state.selected]} />
        <br />
        <div>
          <Button text="vote" handleClick={this.addVote} />
          <Button text="next andectdote" handleClick={this.changeAnectdote} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
