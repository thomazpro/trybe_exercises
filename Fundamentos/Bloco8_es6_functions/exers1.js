const hof = (nome) => {
    const name = nome.toLowerCase().split(' ').join('_');
    return { email: `${name}@gmail.com`, nome }
}

const newEmployees = (hof) => {
    const employees = {
        id1: hof('Pedro Guerra'),
        id2: hof('Luiza Drumont'),
        id3: hof('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(hof));

const checa = (a, b) => a === b ? 'Tente novamente' : 'Parabéns você ganhou';

const nmrAleatorio = (bet, checa) => {
    const nmrSorteado = Math.floor((Math.random() * 5) + 1);
    return checa(bet, nmrSorteado) === ''

console.log(nmrAleatorio(3, checa));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checaResp = (a, b) => {
    if (a === b) return 1;
    if (a === 'N.A') return 0
    return -0.5
}

const checaGabarito = (gab, resp, callback) => {
    return resp.reduce((acc, next, idx) => {
        acc += callback(next, gab[idx]);
        return acc;
    }, 0)
}

console.log(checaGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, checaResp));

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    return Math.floor((Math.random() * 36) + 15);
}

const warriorDamage = () => {
    const max = warrior.strength * warrior.weaponDmg;
    return Math.floor((Math.random() * (max - (warrior.strength + 1))) + warrior.strength)
}

console.log(warriorDamage())

mageDamage = () => {
    const max = mage.intelligence * 2;
    let dano = 0;
    let manaGasta = 0;
    if (mage.mana < 15) {
        dano = 'Sem mana';
    } else {
        dano = Math.floor((Math.random() * (max - (mage.intelligence + 1))) + mage.intelligence);
        manaGasta = 15
    }
    return { dano, manaGasta }
}

console.log(mageDamage())

const gameActions = {
    warriorTurn(callback) {
        const damage = callback();
        dragon.healthPoints -= damage;
        warrior.damage = damage;
    },
    mageTurn(callback) {
        const damage = callback();
        dragon.healthPoints -= damage.dano;
        mage.damage = damage.dano;
        mage.mana -= damage.manaGasta;
    },
    dragonTurn(callback) {
        const damage = callback();
        mage.healthPoints -= damage;
        warrior.healthPoints -= damage;
        dragon.damage = damage;
    },
    turn() {
        if(dragon.healthPoints > 0) {
            this.warriorTurn(warriorDamage);
            this.mageTurn(mageDamage);
            this.dragonTurn(dragonDamage);
        }
        return battleMembers;
    },
};

console.log(gameActions.turn())
console.log(gameActions.turn())
console.log(gameActions.turn())
console.log(gameActions.turn())