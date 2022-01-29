const evento = {
  target: { 
    name: 'beras',
    type: 'text',
  },
  xablau: 23,
  galodoido: 'campeao',
};


const mostra = ({ target: { name } }) => {
  console.log(name);
}

mostra(evento);