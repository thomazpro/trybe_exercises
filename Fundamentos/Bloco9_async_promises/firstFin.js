const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  getPokemonDetails(
    (pokemon) => pokemon.name === 'Bulbasaur',
    (error, message) => {
      if (error) {
        console.log(error);
      } else {
        console.log(message);
      }
    }
  );

const { getPokemonDetails } = require("./get-pokemon-details");

//describe("A função getPokemonDetails", () => {
//  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//    const expectedError = new Error('Não temos esse pokémon para você :(');
//
//    function callback(error, result) {
//      expect(error).toEqual(expectedError);
//      done();
//    }
//
//    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
//  });
//
//  it("retorna um pokemon que existe no banco de dados", (done) => {
//    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
//
//    function callback(err, result) {
//      expect(result).toBe(expectedString);
//      done();
//    }
//
//    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//  });
//});
//  
//  
  module.exports = {
    getPokemonDetails,
  };