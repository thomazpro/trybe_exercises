import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div>
         { conteudos.map((o, i) => (
           <p key={ i }>
             <span>O conteúdo é: { o.conteudo }</span><br/>
             <span>Bloco: { o.bloco }</span><br/>
             <span>Status: { o.status }</span><br/>
            </p>
         )) }
      </div>
    );
  }
}
export default Content;