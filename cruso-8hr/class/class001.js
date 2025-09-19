class Pessoa {
    constructor(nome, sobrenome, dataDeNacimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNacimento = new Date(dataDeNacimento);
    }
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new Pessoa("João", "Siasd", "7-7-91");
const pessoa2 = new Pessoa("dawasd", "Silvda", "7-7-92");
const pessoa3 = new Pessoa("Joasdwa", "Silvasdaw", "7-7-93");
const pessoa4 = new Pessoa("Jasdo", "Silsd", "7-7-94");
const pessoa5 = new Pessoa("Joãasdo", "Silvad", "7-7-95");

class Client extends Pessoa {
    constructor(nome, sobrenome, dataDeNacimento, saldo) {
        super(nome, sobrenome, dataDeNacimento);
        this.saldo = saldo;
    };
}; 

const client1 = new Client("Bruno gsts", "Silva", "07-07-90", 500.00);

console.log(client1);
console.log(client1.nome);
console.log(client1.sobrenome);
console.log(client1.dataDeNacimento);
console.log(client1.saldo);
console.log(client1.obterNomeCompleto());