function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var txt = document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()

    var hora = 20

    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 6) {
        document.getElementById('txt').innerHTML = `Boa <strong>Madrugada</strong>`
        img.src = 'https://images.pexels.com/photos/63558/pexels-photo-63558.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #303334, #141213, #020202`
    } else if (hora >= 6 && hora < 12) {
        document.getElementById('txt').innerHTML = `Bom <strong>Dia</strong>`
        img.src = 'https://images.pexels.com/photos/33778100/pexels-photo-33778100.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #E79227, #E48300, #433124`
    } else if (hora >= 12 && hora <= 18) {
        document.getElementById('txt').innerHTML = `Boa <strong>Tarde</strong>`
        img.src = 'https://images.pexels.com/photos/33813085/pexels-photo-33813085.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #B3AC99, #3F3C29, #0C0D07)`
    } else {
        document.getElementById('txt').innerHTML = `Boa <strong>Noite</strong>`
        img.src = 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #021F31, #554246, #CC480C)`
    }
}