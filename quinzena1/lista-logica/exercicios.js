// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const medida1 =Number (prompt("Digite a altura do retangulo"))
  const medida2 =Number (prompt("Digite a largura do retangulo"))
  console.log(medida1 * medida2)
  // escreva seu código aqui
}

// Exercício 2
function imprimeIdade() {
  const anoAtual =Number (prompt("Digite o ano em que estamos"))
  const anoNascimento =Number (prompt("Digite o ano de seu nascimento"))
  console.log(anoAtual - anoNascimento)
  // escreva seu código aqui
}

// Exercício 3
function calculaIMC() {
  const peso =Number (prompt("Digite seu peso em kg"))
  const altura =Number (prompt("Digite sua altura em metros"))
  console.log(peso/(altura * altura))
  // escreva seu código aqui
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome =String (prompt("Digite seu nome"))
  const idade =Number (prompt("Digite sua idade"))
  const email = prompt("Digite seu email")
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email.trim()}.`
  console.log(frase)

  // escreva seu código aqui
}
//Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite outra cor")
  const cor3 = prompt("Digite a ultima cor")
  const listaDeCores = []
  listaDeCores.push(cor1)
  listaDeCores.push(cor2)
  listaDeCores.push(cor3)
  console.log(listaDeCores)
  // escreva seu código aqui
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const frase =String (prompt("Digite uma frase"))
  console.log(frase.toUpperCase())
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const espetaculo = prompt("Qual o valor do espetaculo?")
  const ingresso = prompt("Qual o valor do ingresso")
  console.log(espetaculo / ingresso)
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const palavra1 =String (prompt("Digite uma palavra"))
  const palavra2 =String (prompt("Digite outra palavra"))
  const palavra1Tamanho = palavra1.length
  const palavra2Tamanho = palavra2.length
  console.log(palavra1Tamanho === palavra2Tamanho)
  
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const palavraUm =String (prompt("Digite uma palavra"))
  const palavraDois =String (prompt("Digite outra palavra"))
  const palavraUmAjustar = palavraUm.toLowerCase()
  const palavraDoisAjustar = palavraDois.toLowerCase()
  console.log(palavraUmAjustar === palavraDoisAjustar)
  
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  const anoHoje =Number (prompt("Digite o ano atual"))
  const dataNascimento =Number (prompt("Digite o ano de seu nascimento"))
  const anoIdentidade =Number (prompt("digite o ano em que sua carteira de identidade foi emitida"))
  const idadeReal = anoHoje - dataNascimento
  const tempoDeIdentidade = anoHoje - anoIdentidade
  let faixaEtaria1 = idadeReal <= 20 && tempoDeIdentidade >= 5
  let faixaEtaria2 = idadeReal >= 20 && idadeReal <= 50 &&  tempoDeIdentidade >= 10
  let faixaEtaria3 = idadeReal > 50 && tempoDeIdentidade >= 15
  console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  const anoInserido =Number (prompt("Digite um ano"))

  let cond1 = (anoInserido % 400) === 0 
  let cond2 = ((anoInserido % 4 === 0) && (anoInserido % 100 !== 0)) 
  let comparativo = anoInserido && cond1 && cond2

   console.log (comparativo || cond1 || cond2)}



// Exercício 12
function checaValidadeInscricaoLabenu() {
  const pergunta1 = prompt("Você tem mais de 18 anos?")
  const pergunta2 = prompt("Você possui ensino médio completo?")
  const pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(pergunta1 === "sim" && pergunta2 === "sim" && pergunta3 === "sim")
  // escreva seu código aqui
}