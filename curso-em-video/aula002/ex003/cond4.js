var hr = new Date()
var hrAtual = hr.getHours()

var dia = new Date()
var diaSem = dia.getDay()

switch (diaSem) {
    case 0: 
        console.log("Hoje é Domingo\n")
        break
    case 1: 
        console.log("Hoje é Segunda\n")
        break
    case 2: 
        console.log("Hoje é Terça\n")
        break
    case 3: 
        console.log("Hoje é Quarta\n")
        break
    case 4: 
        console.log("Hoje é Quinta\n")
        break
    case 5: 
        console.log("Hoje é Sexta \n")
        break
    case 6: 
        console.log("Hoje é Sábado\n")
        break
    default: 
        console.log("[erro] Dia invalido!\n")
}

console.log(`Agora são exatamente ${hr}\n`)
if (hrAtual < 12) {
    console.log(`Bom Dia!`)
} else if (hrAtual > 12 && hrAtual < 18) {
    console.log(`Boa Tarde!`)
} else if (hrAtual >= 0 && hrAtual <= 6) {
    console.log(`Boa Madrugada!`)
} else {
    console.log(`Boa Noite!`)
}