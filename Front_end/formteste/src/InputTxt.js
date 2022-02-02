import React, { Component } from "react";


class InputTxt extends Component {

  errando = ({target: {value}}, callback) => {
    if (value && value.length > 3) {
      callback('')
    } else callback('nomecompouca');
  }


  render() {
    const { input1, handleChange, erro } = this.props;

    return (
      <div>
          <label htmlFor="input1">
            Carro Favorito
            <input type="text" onChange={ (e) => {
              handleChange(e);
              this.errando(e, erro);
            } } value={ input1 } id="input1" />
          </label>
      </div>
    );
  }
}

export default InputTxt;