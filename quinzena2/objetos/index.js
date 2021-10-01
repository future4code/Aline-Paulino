//Exercicio 1 - Interpretação
//será impresso
// Matheus Nachtergaele
//
//canal: Globo, horario: 14h

//Exercicio 2
//A

/*a) O que vai ser impresso no console?

sera impresso
nome: Juca,
idade: 3,
raca: SRD

nome: Juba,
idade: 3,
raca: SRD

nome: Jubo,
idade: 3,
raca: SRD

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?*/

//Faz uma copia dos dados do objeto

//Exercicio 3
//A

/*a) O que vai ser impresso no console?

sera impresso respectivamente
false
undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

o valor "falso", foi atribuido a backender
o undefined aparece por que o objeto altura não existe.*/

//Exercicio 1 - escrita
//A
const dados = {
nome: "Amanda",
apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

function frase(dados){
    console.log(`Eu sou ${dados.nome}, mas pode me chamar de: ${dados.apelidos}.`)
}

console.log(frase(dados))

/*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas 
com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto*/

const novosApelidos = {
    ...dados, apelidos: [" Dim", " dinha ", " Amada" ]
}
console.log(frase(novosApelidos))

//Exercicio 2

/*a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */
const dados1 = {
    nome: "Caio",
    idade: "25",
    profissao: "Advogado"
}
const dados2 = {
    nome: "Ana",
    idade: "20",
    profissao: "Atriz"
}

/*b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:*/

function dadosCompletos(nome,idade,profissao) {
    console.log([dados1.nome, dados1.nome.length, dados1.idade, dados1.profissao, dados1.profissao.length])
    console.log([dados2.nome, dados2.nome.length, dados2.idade, dados2.profissao, dados2.profissao.length])
}
console.log(dadosCompletos(dados1))
console.log(dadosCompletos(dados2))

//EXERCICIO 3
 //A
 const carrinho = []

 //B
 let fruta1 = { nome: "caqui", disponibilidade: true}
 let fruta2 = { nome: "melancia", disponibilidade: true}
 let fruta3 = { nome: "Mamão", disponibilidade: true}
 
 //C
 function AdicionarAoCarrinho(objeto) {
  carrinho.push(objeto)
 }
 
 AdicionarAoCarrinho(fruta1)
 AdicionarAoCarrinho(fruta2)
 AdicionarAoCarrinho(fruta3)
 
 //D
 console.log(carrinho)

