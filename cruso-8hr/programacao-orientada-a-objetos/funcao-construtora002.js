function Pessoa(nome, sobrenome, dataDeNacimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.obterNomeCompleto = function() {
        return `${nome} ${sobrenome}`
    }
    this.dataDeNacimento = new Date(dataDeNacimento);
    this.obterAnoDeNacimento = function() {
        return this.dataDeNacimento.getFullYear();
    }
}

const pessoa1 = new Pessoa("Bruno", "Silva", "7-8-90");

const pessoa2 = new Pessoa("Maria", "Clara", "7-8-90");

const pessoa3 = new Pessoa("Luiz", "Sustavo", "7-8-90");

const pessoa4 = new Pessoa("Joana", "Lima", "7-8-90");

const pessoa5 = new Pessoa("Maria", "Souza", "7-8-90");

console.log(pessoa5);