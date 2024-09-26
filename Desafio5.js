let stringTeste = "evandro";

let listaLetras = [];

for (let i = 1; i < stringTeste.length; i++) {
    listaLetras.push(stringTeste[stringTeste.length - i]);

    if((stringTeste.length - 1) === i) {
        listaLetras.push(stringTeste[0]);
    }
}

let stringInversa = listaLetras.join("");

console.log(stringInversa);
