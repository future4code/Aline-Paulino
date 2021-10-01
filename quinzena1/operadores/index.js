// exercicio 1
// false
// false
// true
// boolean

//exercicio 2
//Antes da palavra prompt precisamos adicionar a palavra 
//Number para que seja feita a conversão para numero
//ex:. let primeiroNumero = Number(prompt("Digite um numero!"))

//o codigo sem a alteração resultara nos dois numeros informados lado a lado
//Ex:. primeiroNumero =20, segundoNumero=20, resultado = 2020

//exercicio 3
//Antes da palavra prompt precisamos adicionar a palavra 
//Number para que seja feita a conversão para numero
//ex:. let primeiroNumero = Number(prompt("Digite um numero!"))

//Exercícios de escrita de código
//exercicio 01

let idadeUsuario = Number(prompt("Qual a sua idade?"))
console.log(idadeUsuario)
let idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo?(a)"))
console.log(idadeAmigo)

//Exercicio 2

console.log("Sua idade é maior do que a do seu melhor amigo?")
console.log(idadeUsuario>idadeAmigo)
console.log(idadeUsuario-idadeAmigo)

let numeroPar = Number(prompt("Digite um numero par"))
console.log(numeroPar)
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)
//todos os restos dão "0" por que todo numero é divisivel por 2
// Se o usuario inserir um mumero impar sobrara resto.

//Exercicio 3
let idadeAno = Number(prompt("Qual a sua idade?"))
console.log(idadeAno, "Anos")
console.log(idadeAno * 12, "meses aproximadamente")
console .log(idadeAno * (365,25), "Dias aproximadamente")
console.log(idadeAno * 8760, "Horas aproximadamente")

//Exercicio 4
let primNumero = Number(prompt("Digite um numero"))
let segunNumero = Number(prompt("Digite outro numero"))
console.log("primeiro numero", primNumero)
console.log("segundo numero", segunNumero)
console.log("o primeiro numero é maior que o segundo?")
console.log(primNumero > segunNumero)
console.log("O primeiro numero é igual ao segundo?")
console.log(primNumero === segunNumero)
console.log("O primeiro numero é divisível pelo segundo?")
const restoDaDivisao = primNumero % segunNumero
console.log(restoDaDivisao === 0)
console.log("O segundo numero é divisível pelo primeiro?")
const segDivisão = segunNumero % primNumero
console.log(segDivisão === 0)
