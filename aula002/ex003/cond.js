var idade = 60

if (idade < 18) {
    console.log(`Você é menor de idade!\n`)
    if (idade >= 16) {
        console.log(`Você já pode votar, mas  seu voto é opcional!`)
    }
} else {
    console.log(`Você é maior de idade!`)
    if (idade >= 60) {
        console.log(`Seu voto não é obrigatorio`)
        return
    }
    console.log(`Você tem ${idade} já pode voltar e seu voto é OBRIGATORIO!!`)
    console.log(`Vai trabalhar vagabundo`)
}