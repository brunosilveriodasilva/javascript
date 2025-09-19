/* if (x < y) {
    console.log("X é menor que Y\n");
} else if (x > y) {
    console.log("X é maior que Y\n");
} else {
    console.log("X é igual a Y\n");
} */

const cor = "azul";

switch (cor) {
    case "azul":
        console.log("A cor é azul\n");
        break;
    case "verde": 
        console.log("A cor é verde\n")
        break;
    case "amarelo": 
        console.log("A cor é amarelo\n")
        break;
    default:
        console.log("A sua cor escolhida não está no sistema\n")
        break;
}

/* const contar = 5;

switch (contar) {
    case 5:
        console.log(5);
    case 4: 
        console.log(4);
    case 3:
        console.log(3);
    case 2:
        console.log(2);
    case 1:
        console.log("1\n");
        console.log("BOOMM!!");
} */

const sexo = "m";

switch (sexo) {
    case "m": 
        console.log("Você é um homem\n");
        break;
    case "M": 
        console.log("Você é um homem\n");
        break;
    case "f":
        console.log("Você é uma mulher\n");
        break;
    case "F":
        console.log("Você é uma mulher\n");
        break;
    default:
        console.log("Invalido!\n");
}

/*let numero;

if (cor == "azul") {
    numero = 10; 
} else {
    numero = 20;
} */

let numero = cor == "vermelho" ? 10 : 20;
console.log(numero);

                    