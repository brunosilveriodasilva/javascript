function Pessoa(nome, sobrenome, dataDeNacimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNacimento = new Date(dataDeNacimento);
    this.amigos = [];

    this.obterAnoDeNacimento = function() {
        return this.dataDeNacimento.getFullYear();
    };

    this.adicionaAmigo = function(amigo) {
        if (!this.amigos.includes(amigo)) {
            amigo.amigos.push(amigo);
        }
    };

    this.obterNomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`;
    };
}

const pessoa1 = new Pessoa("Bruno", "Silva", "7-8-90");
const pessoa2 = new Pessoa("Maria", "Clara", "7-8-90");
const pessoa3 = new Pessoa("Luiz", "Gustavo", "7-8-90");
const pessoa4 = new Pessoa("Joana", "Lima", "7-8-90");
const pessoa5 = new Pessoa("Maria", "Souza", "7-8-90");

pessoa1.adicionaAmigo(pessoa2);
pessoa1.adicionaAmigo(pessoa3);

console.log(pessoa1.obterNomeCompleto(), "\n");
console.log(pessoa1.amigos);
console.log(pessoa2.amigos);
console.log(pessoa4);
