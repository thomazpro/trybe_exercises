import React, { Component } from 'react';

class FormDataDisplay extends Component {
  render() {

    const { mostrado } = this.props;
    
    return (
      <div>
        { mostrado && (
          <div>
            <h2>Dados enviados</h2>
            <h3>Pessoal</h3>
            <div> Name: { mostrado.nameInp }</div>
            <div> Email: { mostrado.emailInp }</div>
            <div> CPF: { mostrado.cpfInp }</div>
            <div> Endereço: { mostrado.endInp }</div>
            <div> Cidade: { mostrado.cityInp }</div>
            <div> Estado: { mostrado.eInp }</div>
            <div> Tipo de residência: { mostrado.casaAp }</div>
          </div>)
         }
      </div>
    );
  }
}

export default FormDataDisplay;