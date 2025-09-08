var agora = new Date()  // Cria um objeto Date com a data e hora atuais
var diaSem = agora.getDay()  // Pega o dia da semana em número (0 a 6)

switch (diaSem) {
    case 0: 
        console.log("Domingo")
        break
    case 1: 
        console.log("Segunda")
        break
    case 2: 
        console.log("Terça")
        break
    case 3: 
        console.log("Quarta")
        break
    case 4: 
        console.log("Quinta")
        break
    case 5: 
        console.log("Sexta")
        break
    case 6: 
        console.log("Sábado")
        break
    default: 
        console.log("[erro] Dia invalido!")
}