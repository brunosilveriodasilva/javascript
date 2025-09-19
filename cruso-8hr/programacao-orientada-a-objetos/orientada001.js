const pessoaA = {
    nome: "Bruno",
    sobrenome: "Silva",
    dataDeNacimento: "28-09-2009",
    obterInformacoesPessoais() {
        return `Seu nome é ${this.nome}, seu sobrenome é ${this.sobrenome} e sua data de nacimento é ${this.dataDeNacimento}`;
    }
}

console.log(pessoaA.obterInformacoesPessoais());

function pessoa(nome, sobrenome, dataDeNacimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNacimento = new Date(dataDeNacimento);
}