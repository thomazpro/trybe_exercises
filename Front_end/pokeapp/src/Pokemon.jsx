import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {

    const { name, type, weight, image } = this.props;
    return (
      <div>
        <h1>{ name }</h1>
        <h6>{ type }</h6>
        <span>{ weight }</span>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

PropTypes.Pokemon = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
}.isRequired;


export default Pokemon;
