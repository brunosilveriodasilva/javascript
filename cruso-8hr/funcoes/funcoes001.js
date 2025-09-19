function saudacao(nome = "(Seu nome)") {
    console.log(`Olá ${nome}`);
}

saudacao("joaozinPvP")

function se_apresentar(nome="(Seu nome)", idade="?") {
    console.log(`Seu nome é ${nome}. Sua idade é ${idade} anos`);
}

function criarNomeCompleto(nome, idade, sexo) {
    sexo = sexo.toUpperCase();
    if (sexo=="M" || sexo=="MASCULINO") {
        return (`Sr. ${nome} sua idade é de ${idade} anos e seu sexo é masculino.`);
    } else if (sexo=="F" || sexo=="FEMININO") {
        return (`Sra. ${nome} sua idade é de ${idade} anos e seu sexo é femilino.`);
    } else {
        return (`${nome} sua idade é de ${idade} anos.`);
    }
}

console.log(criarNomeCompleto("Bruno", 15, "M"));

const nomeCompleto = criarNomeCompleto("Pedro Comedor", 99, "FEMININO");