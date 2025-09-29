let button = document.getElementById('contar');
let limpar = document.getElementById('limpar');
let alertar = document.getElementById('alert'); 

button.addEventListener('click', contar);
button.addEventListener('click', transform);
limpar.addEventListener('click', transform);
limpar.addEventListener('click', limpando);

function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alertar.innerHTML = '<strong>[ERRO]</strong> Prencha todos os campos!';
        setTimeout(() => {
            alertar.textContent = '';
        }, 2000);
    } else {
        alertar.textContent = ''; 

        let Ninicio = Number(ini.value);
        let Nfim = Number(fim.value);
        let Npasso = Number(passo.value);

        if (Nfim === Ninicio) {
            res.style.animation = 'none';
            res.style.color = 'black';
            res.innerHTML = `${Ninicio}.`; 
            return;
        }

        for (let i = Ninicio; i <= Nfim; i += Npasso) {
            if (i === Ninicio) {
                res.innerHTML = '';
                res.style.animation = 'none';
                res.style.color = 'black';
            } else if (i === Nfim) {
                res.innerHTML += `${i}.`; return;
            }
            res.innerHTML += `${i}, `;
        }
    }
}

function transform() {
    this.style.transform = 'scale(0.96)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
};

function limpando() {
    if (res.innerHTML.trim() === 'Preparando a contagem...') {
        return;
    } else {
        res.innerHTML = 'Preparando a contagem';
        res.style.animation = 'piscarAnim 4s infinite'; 
    }
}