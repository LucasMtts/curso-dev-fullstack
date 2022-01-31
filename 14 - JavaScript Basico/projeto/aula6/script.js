/*

string
number
boolean
array
object
undefined
null

*/


//string
let nome = 'Lucas'
console.log(nome)


// string concatenada
let sobrenome = 'Matos'
console.log(nome + ' ' + sobrenome)


//string literal
console.log(`${nome} ${sobrenome}`)




//number
let idade = 35
console.log(idade)
console.log(idade + 10)


//numer float
let porcentagem = 10.2
console.log(porcentagem + '%')




// boolean
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)




//array
let habilidades = ['JavaScript', 'PHP', 'Python']
console.log(habilidades.length)
console.log(habilidades[2])



//object
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: '25',
    habilidades: ['c++', 'c#', 'Python'],
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.habilidades)
console.log(pessoa.idade)



//undefined
let endereco
console.log(endereco)



//null
let cidade = null
console.log(cidade)