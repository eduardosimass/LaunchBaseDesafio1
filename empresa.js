/*Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260*/


const usuario = {
    nome: "Eduardo",
    empresa: {
        nome: "RocketSeat",
        Cor: "Roxa",
        Foco: "Programação",
        Endereço: 'Rua Guilherme Gembala',
        numero: 260
    }

}
console.log(`A Empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.Endereço}, numero ${usuario.empresa.numero}. `)


