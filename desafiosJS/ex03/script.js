function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Falta dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F612}	`
            }            
        } else {
            //Contagem Regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F612}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}