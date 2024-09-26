const dadosPorEstado = [
    {
        "estado": "SP",
        "faturamento": 67836.43
    },
    {
        "estado": "RJ",
        "faturamento": 36678.66
    },
    {
        "estado": "MG",
        "faturamento": 29229.88
    },
    {
        "estado": "ES",
        "faturamento": 27165.48
    },
    {
        "estado": "Outros",
        "faturamento": 19849.53
    }
]

let soma = 0;
dadosPorEstado.forEach(estado => soma += estado.faturamento);

dadosPorEstado.forEach(item => {
    let percentualRepresentacao = (item.faturamento / soma) * 100;
    console.log(`O percentual de representação do estado ${item.estado} é de ${percentualRepresentacao.toFixed(2)}%`);
});
