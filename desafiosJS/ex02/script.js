function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(formularioAno.value.lenght == 0 || Number(formularioAno.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criança-menino.png')
            } else if (idade < 15){
                //meninos
                img.setAttribute('src', 'imagens/menino.png')
            } else if ( idade < 30){
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if ( idade < 50){
                //idade
                img.setAttribute('src', 'imagens/homem-idade.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        }else {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criança-menina.png')
            } else if (idade < 15){
                //meninos
                img.setAttribute('src', 'imagens/menina.png')
            } else if ( idade < 30){
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if ( idade < 50){
                //idade
                img.setAttribute('src', 'imagens/mulher-idade.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} com ${idade} Anos.`
        res.appendChild(img)
    }
}