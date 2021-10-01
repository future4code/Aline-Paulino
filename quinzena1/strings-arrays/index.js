//Exercicio 1
// "a" retornara undefined, por que não foi atribuido valor a variavel
// "b" retorna null, por que o texto da variavel é "null"
//"c" retona "11" o termo length retorna o comprimento, no caso 11 numeros
//"d" retorna "3", e atribuido "0" para a variavel "i", e solicitado a posição de i no caso 0, retonando o primeiro numero da sequencia
//"e" troca "i+1" por 19, anteriormente a segunda posição era ocupada por 4
// agora passa a ser [3,19,5,6,7...]
//"f" retorna "9", atribui a variavel valor o mesmo que "i+6", ou seja a 7 possição.

//Exercicio 2
// Após inserir a frase temos um metodo "toUpperCase" que transformara nossa frase para todas 
//as letras maiuscula e em seguida troca todas as letras "A" por "I"a
// temos então a frase "SUBI NUM ÔNIBUS EM MIRROCOS" então é solicitado um length
// que calcula o comprimento da frase incluindo espaços ou seja "27"
// Resposta retornara SUBI NUM ÔNIBUS EM MIRROCOS e 27

//Exercicio 1 Escrita
let nome = prompt("Digite seu nome")
let email = prompt("Digite seu email")
console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vinda(o)", nome,".")


//Exercicio 2 Escrita
//a
let comidas = ["pastel","pizza","chocolate","caqui","lasanha"]
console.log(comidas)

//b
console.log("Essas são as minhas comidas preferidas")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

//c
let comidaPreferida = prompt("Qual sua comida preferida?")
comidas[0+1]=comidaPreferida
console.log(comidas)

//Exercicio 3 Escrita
//a
let listaDeTarefas = []

//b
listaDeTarefas.push(prompt("Digite a primeira tarefa a ser realizada"))
listaDeTarefas.push(prompt("Digite outra tarefa a ser realizada"))
listaDeTarefas.push(prompt("Digite mais uma tarefa a ser realizada"))

//c
console.log(listaDeTarefas)

//d
let tarefaRealizada =Number(prompt("Digite o numero da tarefa concluida?"))

//e
listaDeTarefas.splice(listaDeTarefas-1,1)

//f
console.log(listaDeTarefas)