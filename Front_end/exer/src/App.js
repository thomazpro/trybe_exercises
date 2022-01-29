import React from 'react';
import './App.css';
import Header from './Header'
import Content from './Content';


const Task = (value, key) => {
  return (
    <li key={ key }>{value}</li>
  );
}

const arr  = [];
for (let i = 0; i < 10;  i+=1) {
  arr.push(`task${i}`);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
      color: 'black',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => {
      console.log(prev.color);
      return ({
        clicks: prev.clicks + 1,
        color: prev.clicks % 2 === 0 ? 'green' : 'black',
      });
    })

  }
  render() {
    const { color, clicks } = this.state;
    return (
      <div>
        <Header />
        <Content />
        <ul>
          { arr.map((o, i) => Task(o, i)) }
        </ul>
        <button className={ color } onClick={ this.handleClick }>{clicks}</button>
      </div>
    );
  }
}
export default App;
