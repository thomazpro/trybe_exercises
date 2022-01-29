const API_URL = 'https://icanhazdadjoke.com/';
const fetch = require('node-fetch');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json)
    .then(data => console.log(data));
    
};

fetchJoke()
//window.onload = () => fetchJoke();