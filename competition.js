
const {createMatch, playMatch} = require('./match')

let idMatch = 1

const isSemiFinalOrFinal = (round, numPlayers) =>{
    if (numPlayers === 4) {
        return 'S'
    }
    if (numPlayers === 2) {
        return 'F'
    }
    return round
}

const initCompetition = (round, listPlayers) =>{
    let numPlayers = listPlayers.length
    let idRound = isSemiFinalOrFinal(round, numPlayers)
    let indexPlayer = 0
    let listMatches = []
    while (indexPlayer !== numPlayers) {
        let player1 = listPlayers[indexPlayer]
        let player2 = listPlayers[indexPlayer + 1]
        let match = createMatch(idMatch ,idRound, player1, player2)
        listMatches.push(match)
        indexPlayer += 2
        idMatch++
    }
    return listMatches
}

const nextRound = (listMatches) =>{
    let winners = []
    for(let match of listMatches){
        winners.push(playMatch(match))
    }
    return winners
}

module.exports = {initCompetition, nextRound}