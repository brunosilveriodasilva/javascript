/* const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero);
}); */

/* const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function(letra, indice) {
    console.log(`${indice}: ${letra}`)
}); */

const tarefas = [
    {
        id: 1,
        texto: "Limpar a casa",
        completo: true,
    },
    {
        id: 2,
        texto: "Arrumar a casa",
        completo: false,
    },
    {
        id: 3,
        texto: "Limpar o fagão",
        completo: true,
    },
    {
        id: 4,
        texto: "Limpar o teto",
        completo: true,
    }
]

tarefas.forEach(function (tarefa, indice, minhasTarefas) {
    //console.log(`${indice + 1}: ${tarefa.texto}`);
    if (tarefa.completo == true) {
        console.log("\n✅ Tarefa Comcluida")
    } else {
        console.log("\n⚠️ Você precisa concluir sua tarefa")
    }
    //console.log(minhasTarefas);
});

const vetorTextoDasTarefas = tarefas.map (function (tarefa) {
    return `${tarefa.id}: ${tarefa.texto}`;
});

console.log(vetorTextoDasTarefas);

const tarafa1 = tarefas.filter(function (tarefa) {
    return tarefa.id === 2;
});

console.log(tarafa1);

const vetor = [1, 2, 3 ,4];
const valorInicial = 0;

const soma = vetor.reduce(function (acumulador = valorInicial, elementoAtual) {
    return acumulador + elementoAtual;
});

console.log(soma);