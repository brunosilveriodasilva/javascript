const botao = document.getElementById("botao-cor");

function alterarCor() {
    botao.style.backgroundColor = "blue"
};

botao.addEventListener("click", alterarCor);