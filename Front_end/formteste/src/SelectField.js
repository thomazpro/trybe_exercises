import React, { Component } from "react";


class SelectField extends Component {
  render() {
    const { selectField, handleChange } = this.props;
    return (
      <div>
          <label htmlFor="cars">Choose a car:</label>
          <select name="cars" id="selectField" value={ selectField } onChange={ handleChange }>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
      </div>
    );
  }
}

export default SelectField;
