function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let corpo = document.querySelector("body")
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.png'
        corpo.style.background = 'rgba(194, 156, 103, 0.85'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png'
        corpo.style.background = 'rgba(198, 105, 23, 0.815)'
    } else {
        img.src = 'images/noite.png'
        corpo.style.background = 'rgba(12, 3, 54, 0.939)'
    }
}

