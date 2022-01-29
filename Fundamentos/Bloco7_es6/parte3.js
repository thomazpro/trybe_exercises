const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurno = (obj, key, value) => {
    obj[key] = value;
  }
  const objKeys = (obj) => {
    Object.keys(obj).forEach((k) => {
        console.log(k)
    })
  }
  const objT = (obj) => Object.keys(obj).length; 

  const objValues = (obj) => {
    Object.values(obj).forEach((k) => {
        console.log(k)
    })
   }
   const juntaObjs = (obj, objd, objt) => ({...obj, ...objd, ...objt});



  addTurno(lesson2, 'turno', 'noite');
  objKeys(lesson2);
  objValues(lesson2);

  console.log(objT(lesson2))
  console.log(lesson2.turno)
  console.log({lesson1, lesson2, lesson3});
  console.log(lesson1)

const agrup = Object.assign({}, {lesson1, lesson2, lesson3});

const somaAlunos = (obj) => {
    return Object.values(obj).reduce((acc, next) => {
        acc += next.numeroEstudantes;
        return acc;
    }, 0)
}

const getValueByNumber = (obj, n) => {
    return Object.values(obj)[n];
}

console.log(somaAlunos(agrup));
console.log(getValueByNumber(lesson1, 0));

const checaPar = (obj, key, value) => {
    return Object.entries(obj).some((e) => JSON.stringify(e) === JSON.stringify([key, value]));
}

console.log(checaPar(lesson3, 'turno', 'noite'));
console.log(checaPar(lesson3, 'materia', 'Maria Clara'));

const createReport = (obj, name) => {
  return filtrado = Object.values(obj).reduce((acc, next) => {
    if (next.professor === name) {
        acc.aulas.push(next.materia);
        acc.estudantes += next.numeroEstudantes
    }
    return acc;
  }, {professor: name, aulas: [], estudantes: 0});
}

console.log(createReport(agrup, 'Maria Clara'))