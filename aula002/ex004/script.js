function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia //
        img.src = 'https://images.pexels.com/photos/33778100/pexels-photo-33778100.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #E79227, #E48300, #433124`
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde //
        img.src = 'https://images.pexels.com/photos/33813085/pexels-photo-33813085.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #B3AC99, #3F3C29, #0C0D07)`

    } else {
        //Boa Noite//
        img.src = 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg'
        document.body.style.backgroundImage = `linear-gradient(to bottom, #021F31, #CC480C)`
    }
}

