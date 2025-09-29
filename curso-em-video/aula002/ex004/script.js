function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var txt = document.getElementById('txt');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são <strong>${hora} Horas`
    if (hora >= 0 && hora < 6) {
        txt.innerHTML = `Boa <strong>Madrugada!</strong>`;
        img.src = '/imagems/magrugado.jpeg';
        document.body.style.backgroundImage = `linear-gradient(to bottom, #303334, #141213, #020202`;
    } else if (hora >= 6 && hora < 12) {
        txt.innerHTML = `Bom <strong>Dia!</strong>`;
        img.src = '/imagems/manha.jpeg';
        document.body.style.backgroundImage = `linear-gradient(to bottom, #E79227, #E48300, #433124`;
    } else if (hora >= 12 && hora <= 18) {
        txt.innerHTML = `Boa <strong>Tarde!</strong>`;
        img.src = '/imagems/tarde.jpeg';
        document.body.style.backgroundImage = `linear-gradient(to bottom, #B3AC99, #3F3C29, #0C0D07)`;
    } else {
        txt.innerHTML = `Boa <strong>Noite!</strong>`;
        img.src = '/images/noite.jpeg';
        document.body.style.backgroundImage = `linear-gradient(to bottom, #021F31, #554246, #CC480C)`;
    }
}