let clientes = [
    {
        nome: 'Lucas',
        idade: 19,
        linguagens: ['javascript', 'python', 'php']
    },
    {
        nome: 'Fulano',
        idade: 28,
        linguagens: ['c', 'c++', 'c#']
    },
    {
        nome: 'Ciclano',
        idade: 32,
        linguagens: ['go', 'closure', 'r']
    }
]

/*    FORMA MAIS CONTROLAVEL

for (let contador = 0; contador < clientes.length; contador++) {
    console.log(clientes[contador].nome)
    
}

*/

let htmlClientes = ''

for(let cliente of clientes){

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens:</b> <br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes