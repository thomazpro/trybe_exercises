class Animal {

    constructor (nome, sobrenome) {
        this.name = nome;
        this.lastname = sobrenome; 
    }

    comer () {
        console.log(`o ${this.name} ${this.lastname} esta comendo`)
    }
}


const animal = new Animal('beras', 'pro')
const hugo = new Animal('hubert', 'patrao')

animal.comer()
hugo.comer()

class Pato extends Animal {
    nadar() {
        console.log('pato nadando');
    }
}

const pato = new Pato('jesus', 'willbert')

pato.nadar()

pato.comer()