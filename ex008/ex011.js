var idade = 67
console.log(`Você tem ${idade} Anos!`)
if ( idade < 16) {
    console.log(`Você não pode vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Seu voto é opcional`)
} else {
    console.log(`Seu voto é obrigatório`)
}