//Exercicio 1 - interpretação

//a) Explique o que o código faz. Qual o teste que ele realiza? 

    /*Pedi que o usuario digite um numero, certifica que realmente  um numero, o if
    verifica se o valor escolhido tem resto 0 quando dividido por 2, em seguida imprime
    as mensagens afirmativas ou negativas para a questão.*/

//b) Para que tipos de números ele imprime no console "Passou no teste"? 

    //Todos os numeros Pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?

    //Todos os numeros impares

//Exercicio 2 - interpretação

    //a) Para que serve o código acima?

    // E uma forma de simplificar o if/else usando switch case, atribui um preço especifico para cada fruta.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    /*O preço da fruta maça, é R$ 5)*/

/*c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
impressa no console se retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?*/

    /*o console não entenderia que ali se encerra uma condição e imprimiria o valor "5" 
    de default*/

//Exercicio 3 - interpretação

//a) O que a primeira linha está fazendo?

    //Solicita ao usuario um numero

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    //numero 10 - sera impresso "Esse número passou no teste", pois o 10 é > que 0 que é a condição imposta.
    //numero -10 - vai dar erro.
    
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

    //Não é possivel acessar a variavel mensagem de fora do bloco.


//Exercicio 1 - escrita

//Faça um programa que pergunta ao usuário qual a idade dele e 
//imprima no console se ele/ela pode dirigir (apenas maiores de idade).

/*a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
 imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/

    const IdadeDoUsuario =Number (prompt("Qual a sua idade?"))
    if (IdadeDoUsuario > 18) {
     console.log("Você pode dirigir.")
    } else {
     console.log("Você não pode dirigir.")
    }

 //Exercicio 2 - escrita
 /*Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar 
 M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", 
 "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else*/
 
    const turno = prompt("Digite o turno em que estuda, M (matutino) ou V (Vespertino) ou N (Noturno).")
    if (turno !== "M") {
     console.log("Bom dia!")}
     else if (turno !== "V") {
    console.log("Boa tarde!")}
    else {
    console.log("Boa Noite!")
    }
//Exercicio 3 - escrita
/*Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/
 const turnoDeEstudo = prompt("Digite o turno em que estuda, M (matutino) ou V (Vespertino) ou N (Noturno).")

    switch (turnoDeEstudo) {
        case 'M':
            console.log('Bom dia!')
            break
        case 'V':
            console.log('Boa tarde!')
            break
        case 'N':
            console.log('Boa Noite!')
            break
        }

//Exercicio 4 - escrita

/*4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um 
filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código
que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
`"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`*/
    
    const filmeGenero = prompt("Qual genero de filme vocês irão assistir?") 
    const preçoIngresso =Number (prompt("Qual o valor do ingresso?"))
    if ((filmeGenero === "fantasia") && (preçoIngresso >= "15")) {
        console.log("Bom filme!")}
    else {
        console.log("Escolha outro filme :(")
    }

