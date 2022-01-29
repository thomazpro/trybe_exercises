class Animal {

    constructor (nome, sobrenome) {
        this.name = nome;
        this.lastname = sobrenome; 
    }

    comer () {
        console.log(`o ${this.name} ${this.lastname} esta comendo`)
    }
}





const animal = new Animal('novo', 'animal');
console.log(typeof animal);
animal.comer()


class Pato extends Animal {
    nadar() {
        this.comer();
    }
}

const pato = new Pato('jesus', 'willbert')

pato.nadar()
pato.comer()

const obj = {
    name: 'magobessa',
    printName() {
        console.log(this.name);
    },
}


obj.printErr()