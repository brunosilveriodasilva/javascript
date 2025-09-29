/* const pessoa = {
    nome: "Bruno",
    sobrenome: "Silva", 
    idade: "15",
    profissao: "Estudante",
    passaTempo: ["Jogar", "Musicas"],
    endereco: {
        rua: "Av 1001",
        casa: "650",
        estado: "SC",
    }
}

console.log(pessoa.nome);
console.log(pessoa.passaTempo[0]);

console.log(pessoa.endereco.rua);

const tarefas = [
    {
        id: 1,
        texto: "Tirar o lixo",
        valor: true,
    },
    {
        id: 2,
        texto: "Lavar a casa",
        valor: false,
    },
    {
        id: 3,
        textto: "Dar banho no cachorro",
        valor: false,        
    }
];
console.log(JSON.stringify(tarefas[1])); */

/* const frutas = ['tomate', 'caju', 'pera', 'banana']

frutas.push(10);

console.log(`Propriedade SORT, ${frutas.sort()}`); // não funciona para números */

const num = [1, 2, 3, 4, 7];

/* for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
}  */

for (let pos in num) { // para cada posição em escreva num[pos]
    console.log(`A posição ${pos} tem valor ${num[pos]}`);
}