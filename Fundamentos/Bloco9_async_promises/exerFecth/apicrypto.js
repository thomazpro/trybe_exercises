const fetch = require('node-fetch')

const fetchCrypto = async () => {
    const url = `https://api.coincap.io/v2/assets`;
    try {
        const retorno = await fetch(url);
        const dado = await retorno.json();
        return dado.data;
    } catch (error) {
        return error;
    }
}

const fetchCurrency = async () => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
    try {
        const retorno = await fetch(url);
        const dado = await retorno.json();
        return dado;
    } catch (error) {
        return error;
    }
}

x = async () => console.log(await fetchCurrency());



const convert = async (moeda, valor) => {
    console.log(moeda);
    const dolarizado = await fetchCurrency()
    const dol = dolarizado.usd[moeda.symbol.toLowerCase()];
    console.log(dol);
    return valor * dol;
}

const imprimeDolar = async  (cod, valor) => {
    const moedas = await fetchCrypto();
    const mueda = moedas.find(({ id }) => id === cod);
    const convertiddo = convert(mueda, valor);
    return convertiddo;
}

imprimeDolar('ethereum', 10);
