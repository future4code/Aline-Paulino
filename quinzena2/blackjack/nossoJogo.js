/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de Blackjack!") //apresentação

    let jogo = confirm("Quer iniciar uma nova rodada?") // propor rodada
    
    if (jogo) {let primCartaUsuario = comprarCarta() // seleção de cartas
    let segCartaUsuario = comprarCarta()
    let primCartaComputador = comprarCarta()
    let segCartaComputador = comprarCarta()

  let pontosUsuario = primCartaUsuario.valor + segCartaUsuario.valor
  let pontosComputador = primCartaComputador.valor + segCartaComputador.valor
  
  console.log("Computador - cartas:" + primCartaComputador.texto +" "+ segCartaComputador.texto + " - " +pontosComputador )  
  console.log("Usuario - cartas:" + primCartaUsuario.texto +" " + segCartaUsuario.texto +" - " + pontosUsuario)

 if (pontosUsuario > pontosComputador) {console.log("O usuário ganhou!")
 } else if (pontosComputador > pontosUsuario) 
 {console.log("O computador ganhou!") } 
 else if (pontosUsuario === pontosComputador) 
 { console.log("Empate!")}
} else { console.log("O jogo acabou") }