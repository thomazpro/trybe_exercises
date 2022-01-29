let tabelaRomana = {
     I: 1,
     V: 5,
     X: 10,
     L: 50,
     C: 100,
     D: 500,
     M: 1000
};
 
function retornaNumero (numeroRomano) {
    retorno =  0;

    if (numeroRomano != null) {
        for (let i = 0; i < numeroRomano.length; i++) {
            if (i < numeroRomano.length-1 && tabelaRomana[numeroRomano.charAt(i)] < tabelaRomana[numeroRomano.charAt(i+1)]) {
                retorno -= tabelaRomana[numeroRomano.charAt(i)];
            } else {
                retorno += tabelaRomana[numeroRomano.charAt(i)];
            }
        }
    }

    return retorno;

}

console.log(retornaNumero("CM"))