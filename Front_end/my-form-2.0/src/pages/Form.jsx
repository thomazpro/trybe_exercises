import React, { Component } from 'react';
import FieldOne from '../components/FildOne';
import FormDataDisplay from '../components/FormDataDisplay';

class Form extends Component {
  constructor() {
    super();
    this.state = { 
      nameInp: '',
      emailInp: '',
      cpfInp: '',
      endInp: '',
      cityInp: '',
      casaAp: '',
      eInp: '',
      validation: false, 
      count: 0,
      click: false,
      mostrado: false };
  }

  handleChange = ({target}) => {
    const { id } = target;
    const value = target.type === 'checkBox' ? target.checked : target.value;
    console.log(value);
    this.setState({
      [id]: value,
    }, this.handleValidation);
  }

  handleValidation = () => {
    let {  nameInp, emailInp, cpfInp, endInp, cityInp, casaAp, eInp } = this.state;
    nameInp = nameInp && nameInp.length < 40;
    console.log(nameInp);
    emailInp = emailInp && emailInp.length < 40;
    cpfInp = cpfInp && cpfInp.length < 40;
    console.log(cpfInp);
    endInp = endInp  && endInp.length < 40;
    console.log(endInp);
    cityInp = cityInp && cityInp.length < 40;
    console.log(cityInp);
    const resp = nameInp && emailInp && cpfInp && endInp && casaAp && eInp && cityInp;
    console.log(resp);
    this.setState({validation: resp});
  }

  handleAlert = () => {
    if (this.state.count < 1) {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        count: 1,
      })
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.validation) {
      this.setState((prev) => ({ 
        nameInp: '',
        emailInp: '',
        cpfInp: '',
        endInp: '',
        cityInp: '',
        casaAp: '',
        eInp: '',
        validation: false, 
        count: 0,
        click: true, 
        mostrado: prev,
      }));

    }
  }

  handleLimpa = (e) => {
    e.preventDefault();
    this.setState({ 
      nameInp: '',
      emailInp: '',
      cpfInp: '',
      endInp: '',
      cityInp: '',
      casaAp: '',
      eInp: '',
      validation: false, 
      count: 0,
      click: true, 
      mostrado: false,
    });
  }
  
  
  render() {
    const {  nameInp, emailInp, cpfInp, endInp, cityInp, validation, mostrado } = this.state; 
    return (
      <div>
        <form>
          <FieldOne 
            handleChange={ this.handleChange }
            nameInp={ nameInp }
            emailInp={ emailInp }
            cpfInp={ cpfInp }
            endInp={ endInp }
            cityInp={ cityInp }
            alerta={ this.handleAlert }
          />
          <button disabled={ !validation } onClick={ this.handleClick }>send</button>
        </form>
        <FormDataDisplay mostrado={ mostrado }/>
        <button onClick={this.handleLimpa}>limpa</button>
      </div>

    );
  }
}

export default Form;