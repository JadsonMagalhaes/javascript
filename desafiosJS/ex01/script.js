function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 13
    var min = data.getMinutes()
    msg.innerHTML = `São Exatamente ${hora} Horas e ${min} Minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA 
        img.src = 'imagens/dia.png'
        document.body.style.background = '#debd91'
              
    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ec8a48'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1b4689'
    }
}

