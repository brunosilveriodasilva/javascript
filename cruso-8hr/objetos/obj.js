const pessoa = {
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

console.log(JSON.stringify(tarefas[1]));
  
