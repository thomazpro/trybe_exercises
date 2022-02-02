import React, { Component } from 'react';

class FieldOne extends Component {
  
  render() {
    const { handleChange, nameInp, emailInp, cpfInp, endInp, cityInp, alerta } = this.props;
    return (
      <fieldset>
        <label htmlFor="nameInp">
          <input type='text' onChange={ handleChange } id="nameInp" value={ nameInp }/>
        </label>
        <label htmlFor="emailInp">
          <input type='text' onChange={ handleChange } id="emailInp" value={ emailInp }/>
        </label>
        <label htmlFor="cpfInp">
          <input type='text' onChange={ handleChange } id="cpfInp" value={ cpfInp } onMouseEnter={ alerta }/>
        </label>
        <label htmlFor="endInp">
          <input type='text' onChange={ handleChange } id="endInp" value={ endInp }/>
        </label>
        <label htmlFor="cityInp">
          <input type='text' onChange={ handleChange } id="cityInp" value={ cityInp }/>
        </label>
        <input type="radio" id="casaAp" name="res" value="casa" onChange={ handleChange }/>
        <label htmlFor="casa">casa</label>
        <input type="radio" id="casaAp" name="res" value="ap" onChange={ handleChange }/>
        <label htmlFor="ap">ap</label>
        <select name="eInpt" id="eInp" onChange={ handleChange }>
          <option value="MG">MG</option>
          <option value="SP">SP</option>
        </select>
      </fieldset>
    );
  }
}

export default FieldOne;