import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  async componentDidMount() {
    const result = await this.fetchCharacters();
    if (result) {
      this.setState({
        characters: result,
      });
    }
  }

  fetchCharacters = async () => {
    try {
      const retorno = await fetch('https://rickandmortyapi.com/api/character');
      const result = await retorno.json();
      console.log(result);
      return result.results;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
