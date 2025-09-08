var agr = new Date()
var hr = agr.getHours()

console.log(`Agora são exatamente ${hr} horas!\n`)
if (hr < 12) {
    console.log(`Bom Dia!`)
} else if (hr > 12 && hr < 18) {
    console.log(`Boa Tarde!`)
} else if (hr >= 0 && hr <= 6) {
    console.log(`Boa Madrugada!`)
} else {
    console.log(`Boa Noite!`)
}