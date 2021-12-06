
const listPlayers = require('./player')
const {initCompetition, nextRound} = require('./competition')
const {getListFullInfoMatches} = require('./match')
const SYSTEM_MESSAGES = require('./utils')

const simulateCompetition = () => {
    console.log(SYSTEM_MESSAGES.INIT_SIMULATION)
    let winnerPlayers = listPlayers
    let numMatches = winnerPlayers.length/2
    let round = 1
    let matches = []
    while (numMatches > 0 && numMatches >= 1 ){
        console.log(SYSTEM_MESSAGES.INFO_BALLOON_WORLDCUP(round, numMatches))
        matches = initCompetition(round, winnerPlayers)
        winnerPlayers = []
        winnerPlayers = nextRound(matches)
        console.table(getListFullInfoMatches(matches))
        round++
        if (numMatches === 1) {
            console.log(SYSTEM_MESSAGES.COMPETITION_WINNER(winnerPlayers))
            console.log(SYSTEM_MESSAGES.FINISH_SIMULATION)
            return winnerPlayers
        }else{
            matches = []
            numMatches = numMatches/2
        }
    }
}

simulateCompetition()