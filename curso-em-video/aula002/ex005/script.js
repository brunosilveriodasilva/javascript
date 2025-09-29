let data = new Date();
let ano = data.getFullYear();
let txtano = document.getElementById('txtano');
let res = document.getElementById('res');
let error = document.querySelector('#error');
let genero = '';

function check() {
    let idade = ano - Number(txtano.value);
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    
    if (txtano.value.length == 0 || Number(txtano.value) > ano || idade > 120) {
        if (idade > 120) {
            error.textContent = '[ERRO] Data de nacimento errada!';
        } else {
            error.textContent = '[ERRO] Verifique novamente!';
        }
        setTimeout(() => {
            error.textContent = '';
        }, 2000);
        res.innerHTML = ''; 
    } else {
        let txtsx = document.getElementsByName('txtsx');
        
        if (txtsx[0].checked) {
            genero = 'Masculino';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', '/imagems/criancamac.jpg');
            } else if (idade > 10 && idade <= 18) {
                img.setAttribute('src', '/imagems/jovemac.jpg'); 
            } else {
                img.setAttribute('src', '/imagems/homen.jpg');
            }
        } else if (txtsx[1].checked) {
            genero = 'Feminino';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', '/imagems/criancafem.jpg');
            } else if (idade > 10 && idade <= 18) {
                img.setAttribute('src', '/imagems/jovemfem.jpg');
            } else {
                img.setAttribute('src', '/imagems/mulher.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Idade calculada: ${idade} | Sexo: ${genero}`;
        res.appendChild(img);
    }
}
