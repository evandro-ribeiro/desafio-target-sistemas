let arrayFibonacci = [0,1,1];
let soma = 0;

for (let i = 2; i < 50; i++) {
    soma = arrayFibonacci[i] + arrayFibonacci[i-1];
    arrayFibonacci.push(soma);
}

function validaTeste(numeroUsuario) {
    let validacao = arrayFibonacci.find(item => item === numeroUsuario);

    if(validacao) {
        console.log("O número informado pertence a sequência de Fibonacci!");
    } else {
        console.log("O número informado não pertence a sequência de Fibonacci!");
    }
}

let testeValido = 34;
let testeInvalido = 35;

validaTeste(testeValido);
validaTeste(testeInvalido);
