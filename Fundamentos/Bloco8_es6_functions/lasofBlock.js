const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  console.log();
});

function sum (...val){
    return val.reduce((acc, next) => acc + next)
}

console.log(sum(1, 2, 23, 5))

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  console.log(personLikes(alex));
  console.log(personLikes(gunnar));

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];

  const filterPeople = (arr) => {
    return arr.filter(({ bornIn }) => bornIn >= 1900 && bornIn < 2000);
  }

  console.log(filterPeople(people));

  const myList = [1, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];


const toObj = ([name, model, year]) => ({name, model, year});

console.log(toObj(palio));


const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  // escreva shipLength abaixo
  const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;
  
  console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1]))// 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

  const greet = (name, msg = 'Hi') => `${msg} ${name}`;

  const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const toMonths = ({spring, summer, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter];

  console.log(toMonths(yearSeasons));