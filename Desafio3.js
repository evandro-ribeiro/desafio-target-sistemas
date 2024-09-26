import { readFile } from 'fs/promises';

const dados = JSON.parse(await readFile('./dados.json', 'utf8'));

let menorValor = 10000;
let maiorValor = 0;
let soma = 0;

for (let i = 0; i < dados.length; i++) {
    let dado = dados[i];

    soma += dado.valor;

    if(dado.valor > maiorValor) {
        maiorValor = dado.valor;
    } else if(dado.valor <= menorValor && dado.valor !== 0) {
        menorValor = dado.valor;
    }
}

let media = soma / dados.length;
let diasFaturamentoMaior = 0;

dados.forEach(dado => {
    if(dado.valor > media) diasFaturamentoMaior++;
});

console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${menorValor}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${maiorValor}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasFaturamentoMaior}`);
