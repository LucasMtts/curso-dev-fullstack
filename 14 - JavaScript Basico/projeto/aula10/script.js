let inputNota1 = prompt('Digite sua primeira nota')
let inputNota2 = prompt('Digite sua segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota2 + nota2) / 2

console.log(media)

if (media>= mediaMinima) {
    document.write('ok, passou de ano')
} else if (media < mediaMinima) {
    document.write('ops, não passou de ano')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('PARABÉNS, você atingiu a nota máxima!!!')

} else if (media >= mediaMinima && media === 9) {
    document.write('parabéns, quase atingiu anota máxima')

} else if (media >= mediaMinima && media === 8) {
    document.write('Boa, você mandou bem')

} else if (media >= mediaMinima && media === 7) {
    document.write('Você conseguiu passar por pouco')
}

if (media < mediaMinima && media === 1) {
    document.write('Você é um lixo')
}