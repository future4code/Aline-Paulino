//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

//O codigo roda um loop onde o fim é quando o numero seja menor de 5, em seguida faz a soma dos numeros impressos
//O resultado sera "10"(1 + 2 + 3 + 4)

//2. Leia o código abaixo:
   //a) O que vai ser impresso no console?

    // sera impresso "19,21,23,25,27,30"
    
    /*b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
    o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?*/

    //Não sei a resposta


//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

//Seria impresso sequencialmente * ** *** **** , ja que o limite escolhido foi de 4, ou seja enquando a afirmação fosse menor estariamos em loop.

//Exercicio de escrita

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console

let bichinhos = Number(prompt("Quantos animais você tem?"))
let nomesBichinhos = []

 if(bichinhos > 0) {
     for(let minimo = 0; minimo < bichinhos; minimo++){
    nomesBichinhos.push(prompt('Digite o nome dos animais.'))
     }
} else{console.log("Que pena! Você pode adotar um pet!")}
console.log(nomesBichinhos)

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
//Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
//a) Escreva um programa que **imprime** cada um dos valores do array original.
//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
 let arrayOriginal = [0, 5, 10, 15, 20, 25, 30, 35, 40]
 function todosOsNumeros() {
     console.log(arrayOriginal)
 }
 todosOsNumeros()
 
 //B



