let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
 
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// exer 2

let x = 0;

for (let i = 0; i < numbers.length; i += 1) {
    x += numbers[i];
}

console.log(x);

// exer 3

let y = 0;

for (let i = 0; i < numbers.length; i += 1) {
    y += numbers[i];
    if (i === numbers.length-1) {
        y = y/numbers.length;
    }
}

console.log(y);

// exer 4 

if (y > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor igual que 20");
}

// exer 5

let mv = 0; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > mv) {
        mv = numbers[i]
    }
}

console.log(mv);

// exer 6

let contador = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 > 0) {
        contador += 1;
    }
}

if (contador > 0) {
    console.log(contador);
} else {
    console.log("nao existem nmrs impares");
}

//exer 7 


let mnv = numbers[0]; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < mnv) {
        mnv = numbers[i]
    }
}

console.log(mnv);

//exer 8

let array = [];

for (let i = 0; i < 25; i++) {
    array.push(i+1);
}
console.log(array)

//exer 9 

for (let num of array) {
    console.log(num/2);
}

//bonus 

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] < numbers[j]) {
        let armazen = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = armazen;
      }
    }
}

  console.log(numbers)

  for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] > numbers[j]) {
        let armazen = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = armazen;
      }
    }
}
console.log(numbers);



