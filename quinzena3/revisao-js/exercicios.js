// EXERCÍCIO 01
function inverteArray(array) {
    let numerosInvertidos = []
    for (let i = array.length-1; i>=0; i--){
      numerosInvertidos.push(array[i])
    }
  return numerosInvertidos
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados  = []
  for (let numero of array){
    if (numero % 2 === 0) {
      let elevado = numero * numero
      numerosParesElevados.push(elevado)
    }
  }
  return numerosParesElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let numero of array) {
    if (numero % 2 === 0) {
    numerosPares.push(numero)
  }}
 return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = []
for (let item = 0; item < array.length; item++) {
  if (array[item] > maiorNumero ) {
     maiorNumero = array[item];
  }
}return maiorNumero
}
// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
  }

// EXERCÍCIO 06
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 
const booleano4 = !booleano3

function retornaExpressoesBooleanas() {
 {let resposta1 = booleano1 && booleano2 && !booleano4
   let resposta2 = (booleano1 && booleano2) || !booleano3
     let resposta3 = (booleano2 || booleano3) && (booleano4 || booleano1)
     let resposta4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
     let resposta5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
     let respostas = [resposta1,resposta2,resposta3,resposta4,resposta5]
return respostas}}
// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    let numerosPares = []
    for (let num = 0; numerosPares.length < n; num++) {
        if (num % 2 == 0) {
            numerosPares.push(num)
        }
    }
    return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c && a === c) {
    return 'Equilátero'
  } else if (a === b && b !== c && a !== c) {
    return 'Isósceles'
  } else (a !== b && b !== c && a !== c)
    return'Escaleno'
  }
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'


// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let a
  let b
  let c
 if (num1>num2){
   a = num1}
   else{ a = num2}

 if (num1 % num2 === 0 || num2 % num1 ===0 ){
  b = true
 }
 else{b = false}

c = Math.abs(num2-num1)

  const objeto = {
    maiorNumero: a,
    maiorDivisivelPorMenor: b,
    diferenca: c
  }
  return objeto
}
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let numerosOrganizados = array.sort(function(a, b) {
    return a - b;
});
  let novaArray = []
  novaArray.push(numerosOrganizados[numerosOrganizados.length-2] ,numerosOrganizados[1])
  return novaArray
}
// EXERCÍCIO 11
function ordenaArray(array) {
  let auxiliar
  let controle
  for(let i = 0; i < array.length; i+=1) {
    controle = true
    for(let j = 0; j < (array.length - 1); j+=1) {

      if(array[j] > array[j + 1]){
        auxiliar = array[j]
        array[j] = array[j + 1]
        array[j + 1] = auxiliar
        controle = false;
      }
    }
    if(controle){
      break;
    }
  }
  return array
}
/*let aux
    for(let i =0 ; i < array.length ; i+=1){
      for(let x = 0; x < (array.length-1) ; x+=1){
        if(array[x] > array[x+1]){
          aux = array[x];
          array[x] = array[x+1];
          array[x+1] = aux;
        }
      }
    } return array
}*/
/*Escreva uma função que recebe um array de números e retorne outro array com os números em ordem crescente. 
(**Desafio**: tentem fazer sem usar função de ordenação de array.)*/

// EXERCÍCIO 12
function filmeFavorito() {
  let nomeModelo = "O Diabo Veste Prada"
  let anoModelo = 2006
  let diretorModelo = "David Frankel"
  let atoresModelo = ["Meryl Streep", "Anne Hathaway", "Emily Blunt","Stanley Tucci"]
  
  const filme = {
    nome: null,
    ano: null,
    diretor: null,
    atores: null}
  
    filme.nome = nomeModelo
    filme.ano = anoModelo
    filme.diretor = diretorModelo
    filme.atores = atoresModelo
  return filme}

// EXERCÍCIO 13
function imprimeChamada() {
  let nomeModelo = "O Diabo Veste Prada"
  let anoModelo = 2006
  let diretorModelo = "David Frankel"
  let atoresModelo = ["Meryl Streep", " Anne Hathaway", " Emily Blunt"," Stanley Tucci"]
  
  const filme = {
    nome: null,
    ano: null,
    diretor: null,
    atores: null}
  
    filme.nome = nomeModelo
    filme.ano = anoModelo
    filme.diretor = diretorModelo
    filme.atores = atoresModelo

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
    let larguraModelo = lado1
    let alturaModelo = lado2
    let perimetroModelo = (2 * (lado1 + lado2))
    let areaModelo = lado1 * lado2

  const medidasRetangulo = {
    largura: null,
    altura: null,
    perimetro: null,
    area: null}
  
    medidasRetangulo.largura = larguraModelo
    medidasRetangulo.altura = alturaModelo
    medidasRetangulo.perimetro = perimetroModelo
    medidasRetangulo.area = areaModelo

  return medidasRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    ... pessoa,
    nome: "ANÔNIMO"
  }
  return novaPessoa
}
// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let adultos = arrayDePessoas.filter((valor)=>{
    if (valor.idade >=18) { 
      return valor
}
})
return adultos}


// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let menoresDeIdade = arrayDePessoas.filter((valor)=>{
    if (valor.idade < 18) { 
      return valor
}
})
return menoresDeIdade
}


// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let arrayPor2 = array.map((valor)=> {
  let multiplicacao = valor * 2
  return multiplicacao
  })
  return arrayPor2
  }

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
    let arrayString = array.map((valor)=> {
    let multiplicacaoString = valor * 2
    multiplicacaoString = String(multiplicacaoString)
    return multiplicacaoString
    })
    return arrayString
    }

// EXERCÍCIO 17C
function verificaParidade(array) {
  let arrayParImpar = array.map((valor)=>{
    if (valor % 2 === 0) { 
      return `${valor} é par` }
      else (valor % 2 !== 0)
      return `${valor} é ímpar`
})
return arrayParImpar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {}
