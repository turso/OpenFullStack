import React from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const VoteCount = props => {
  return <div>has {props.selectedAnecdote} votes</div>;
};

const Button = props => <button onClick={props.handleClick}>{props.text}</button>;

const Winner = props => {
  return <div>{props.leadingAnecdote}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    };
    this.changeAnecdote = this.changeAnecdote.bind(this);
  }

  changeAnecdote = () => {
    this.setState(prevState => ({
      selected: Math.floor(Math.random() * 6)
    }));
  };

  addVote = () => {
    const voteList = [...this.state.votes];
    voteList[this.state.selected] += 1;
    this.setState(prevState => ({
      votes: voteList
    }));
  };

  MostVotes = props => {
    const mostVoteCount = Math.max.apply(Math, this.state.votes);
    const indexOfMaxValue = this.state.votes.reduce((iMax, x, index, arr) => (x > arr[iMax] ? index : iMax), 0);
    return (
      <div>
        <p>{this.props.anecdotes[indexOfMaxValue]}</p>
        <p>has {mostVoteCount} votes</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>{this.props.anecdotes[this.state.selected]}</div>
        <br />
        <VoteCount selectedAnecdote={this.state.votes[this.state.selected]} />
        <br />
        <div>
          <Button text="vote" handleClick={this.addVote} />
          <Button text="next andectdote" handleClick={this.changeAnecdote} />
        </div>
        <h2>anectdote with the most votes:</h2>
        <Winner leadingAnecdote={this.MostVotes()} />
      </div>
    );
  }
}

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
