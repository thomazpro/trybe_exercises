import React from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
  funcaoX() {
    console.log('mago');
  }

  render() {
    return (
      <div>
        { data.map((o) => (
          <Pokemon name={ o.name } type={ o.type } image={ o.image }
          weight={ `${ o.averageWeight.value } ${ o.averageWeight.measurementUnit }`}/>
        )) }
        { this.funcaoX() }
      </div>
    );
  }
}

export default Pokedex;