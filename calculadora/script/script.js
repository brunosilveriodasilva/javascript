let inputDisplay = document.getElementsByClassName("display")[0];
let entradaAtual = "";
let operadorAtual = ""; 
const botoes = document.querySelectorAll("button");

function reset() {
        inputDisplay.style.textAlign = "right";
        inputDisplay.style.color = ""
    }

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.style.transform = "scale(0.96)";
        setTimeout(() => {
            botao.style.transform = "scale(1)";
        }, 100); 
    });
});

function numberClick(value) {
    reset();
    if (entradaAtual.length === 18) return;
    entradaAtual += value;
    inputDisplay.textContent = entradaAtual;
}

function operadorClick(operador) {
    reset();
    if (entradaAtual.length === 18) return;
    if (entradaAtual === "" && operador !== ".") return;
    if (operador === "." && entradaAtual.includes(".")) return;

    const operadores = ["+", "-", "*", "/"];
    
    const ultimoCar = entradaAtual[entradaAtual.length - 1];
    if (operadores.includes(ultimoCar) && operadores.includes(operador)) return;

    entradaAtual += operador;
    inputDisplay.textContent = entradaAtual;
}

function cleanClick() {
    entradaAtual = "";
    inputDisplay.textContent = "";
}

function calcular() {
    try {
        if (entradaAtual.length === 18) return;
        let result = eval(entradaAtual);
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
        }
        entradaAtual = result;
        inputDisplay.textContent = entradaAtual;
    } catch (error) {
        inputDisplay.innerHTML = "<i>Error</i>";
        inputDisplay.style.color = "#690000ff"
        inputDisplay.style.textAlign = "center";
        entradaAtual = "";
    }
}