const meuFormulario = document.querySelector("#meu-formulario");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const mensagem = document.querySelector(".mensagem");
const ususarios = document.querySelector("#usuarios");

function reset() {
    inputNome.value = "";
    inputEmail.value = "";
}

meuFormulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();
    const usuarios = document.getElementById("usuarios");
    usuarios.innerHTML = "";
    

    if (inputNome.value === "" && inputEmail.value === "") {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Por favor, prencha o os campos abaxo";

        setTimeout(() => mensagem.innerHTML = "", 2000);
    } else if (inputNome.value.trim() !== "" && inputEmail.value.trim() !== "") {
        mensagem.textContent = "";
        usuarios.innerHTML = `
            Seu nome escolhido foi: <mark>${inputNome.value}</mark><br>É seu Emalil é: <mark>${inputEmail.value}</mark>
        `;
    }

    reset()
}