//testar o Commit

let heroi = "Mike"
let xpAdquida = 6005
let rank = ""
 
//Constante para repetir a mensagem de rank

const msgRank = " Seu Rank atual e: "

const Barra = "><><><><><><><><><><><><><><><><><><><><"

switch (true) {
    case xpAdquida <= 1000:
    nomeDoRank = "Ferro"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 1001 && xpAdquida <= 2000:
        rank = "Bronze"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 2001 && xpAdquida <= 5000:
        rank = "Prata"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 5001 && xpAdquida <= 6000:
        rank = "Ouro"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 6001 && xpAdquida <= 7000:
        rank = "Platina"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 7001 && xpAdquida <= 8000:
        rank = "Ascendente"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 8001 && xpAdquida <= 9000:
        rank = "Imortal"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 9001 && xpAdquida <= 10000:
        rank = "Radiante"
    console.log(msgRank + rank)
    break

    case xpAdquida >= 10001:
        rank = "TOP Global"
    console.log(msgRank + rank + "\nVocê e o mais destemido desse mundo")
    break
}



const mensagemInicial = "Ola caro guerreiro, vamos ver suas habilidades ? "



console.log(Barra  +
     mensagemInicial + 
     heroi  + 
    msgRank + 
    rank
)