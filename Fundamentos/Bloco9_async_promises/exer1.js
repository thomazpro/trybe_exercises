//const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//  `${name} is ${value} ${measurementUnit} apart from the Sun`;
//
//const mars = {
//  name: "Mars",
//  distanceFromSun: {
//    value: 227900000,
//    measurementUnit: "kilometers",
//  },
//};
//
//const venus = {
//  name: "Venus",
//  distanceFromSun: {
//    value: 108200000,
//    measurementUnit: "kilometers",
//  },
//};
//
//const jupiter = {
//  name: "Jupiter",
//  distanceFromSun: {
//    value: 778500000,
//    measurementUnit: "kilometers",
//  },
//};

//console.log(planetDistanceFromSun(mars)); // A
//console.log(planetDistanceFromSun(venus)); // B
//console.log(planetDistanceFromSun(jupiter)); // C

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

//console.log(planetDistanceFromSun(mars)); // A
//setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
//setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => console.log(mars), 4000);
  };
  
//  getPlanet(); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = async (temp, falha) => {
  setTimeout(() => {
    const randomic = (Math.random() * 10) + 1;
    (randomic > 0 && randomic < 7) ? temp(getMarsTemperature()) : falha('Robot is busy"');
  }, messageDelay())
}

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});


sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError);