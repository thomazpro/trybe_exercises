import React, { Component } from "react";


class CheckBox extends Component {


  render() {
    const { checkStatus, handleChange } = this.props;
    return (
      <div>
          <label htmlFor="input2">
            <input type="checkbox" onChange={ handleChange } checked={ checkStatus } id="input2" />
          </label>
      </div>
    );
  }
}

export default CheckBox;