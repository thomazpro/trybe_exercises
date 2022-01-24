const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((o) => o.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947())

function smallerName() {
    return books.reduce((acc, next) => {
        if (acc.length > next.name.length) acc = next.name;
        return acc;
    }, books[1].name);
}

function getNamedBook() {
    return books.find((o) => o.name.length === 26);
}

console.log(getNamedBook());

function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => b.releaseYear - a.releaseYear);
  }

  console.log(booksOrderedByReleaseYearDesc());

  function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
    return books.every((o) => o.author.birthYear < 2000 && o.author.birthYear >= 1900);
  }

  console.log(everyoneWasBornOnSecXX(0));

function someBookWasReleaseOnThe80s() {
    return books.some((o) => o.releaseYear >= 1980 && o.releaseYear < 1990);
}

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  let resp = true;
  books.forEach((o) =>  {
    if (books.some((e) => {
        if (o.name != e.name) {
           return o.author.birthYear === e.author.birthYear
        }
    })) resp = false;
   })
   return resp;
}

console.log(authorUnique())