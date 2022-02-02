import React, { Component } from "react";
import SelectField from "./SelectField";
import CheckBox from "./CheckBox";
import InputTxt from "./InputTxt";


class Form extends Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      selectField: '',
      input1: '',
      input2: false,
      txtArea: '',
      formError: true,
      vendoError: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
    this.handleErro = this.handleErro.bind(this);
  }

  handleErro(arg) {
    this.setState({vendoError: arg});
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    }, this.handleDisable);
  }

  handleChangeCheck({ target: { checked }  }) {
    this.setState({
      input2: checked,
    }, this.handleDisable);
    console.log(checked);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   alert(
  //     `Selected file - ${this.fileInput.current.files[0].name}`
  //   );
  // }

  handleDisable() {
    const { input1, input2, selectField } = this.state;
    const input1Val = input1 && input1.length > 2;
    const resp = !(input1Val && input2 && selectField);
    console.log(resp);
    this.setState({ formError: resp });
  }


  render() {
    const { selectField, input1, input2, txtArea, formError } = this.state;
    return (
      <div>
        <form>
          <InputTxt handleChange={ this.handleChange } input1={ input1 } erro={ this.handleErro } />
          <CheckBox handleChange={ this.handleChangeCheck } checkStatus={ input2 } />
          <SelectField handleChange={ this.handleChange } selectField={ selectField } />
          <textarea id="txtArea" onChange={ this.handleChange } value={ txtArea }/>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <button type="submit" disabled={ formError }>send</button>
          { formError && <span>Preencha corretamente</span> }
        </form>
      </div>
    );
  }
}

export default Form;