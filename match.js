
const createMatch = (idMatch,idRound, Player1, Player2) => {
    return {
        idMatch : idMatch,
        round: `${idRound}`,
        player1: Player1,
        player2: Player2,
        scorePlayer1:0,
        scorePlayer2:0
    }
}

const getPointMatch = (playerHitBalloon, playerRecievedBalloon) => {
   
    if(playerHitBalloon && playerRecievedBalloon){

        let distanceShootPlayerHitBalloon = playerHitBalloon.hitBalloon()
        let isPlayerRecievedBalloon = playerRecievedBalloon.successRecievedBalloon(distanceShootPlayerHitBalloon)

        while(isPlayerRecievedBalloon){
            let distanceShootPlayerRecievedBalloon = playerRecievedBalloon.hitBalloon()
            if (!playerHitBalloon.successRecievedBalloon(distanceShootPlayerRecievedBalloon)) {
                return playerRecievedBalloon
            }
        }
        return playerHitBalloon
    }
    return isPointForPlayerHit
}

const playMatch = (match) => {

    let playerWinPoint = getPointMatch(match.player1, match.player2)

    while (match.scorePlayer1 !== 4 || match.scorePlayer2 !== 4){
        if (playerWinPoint.idPlayer === match.player1.idPlayer) {
            match.scorePlayer1++
            playerWinPoint = getPointMatch(match.player2, match.player1)
            if (match.scorePlayer1 === 4) {
                return match.player1
            }
        }else{
            match.scorePlayer2++
            playerWinPoint = getPointMatch(match.player1, match.player2)
            if (match.scorePlayer2 === 4) {
                return match.player2 
            }
        }
    }
}

const getMatchInfoDetail = (match) => {
    return {
        round: match.round,
        player1Name : match.player1.name,
        player1Country : match.player1.country,
        scorePlayer1 : match.scorePlayer1,
        player2Name : match.player2.name,
        player2Country : match.player2.country,
        scorePlayer2: match.scorePlayer2,
        winnerName : match.scorePlayer1 === 4 ? match.player1.name :  match.player2.name,
        countryName : match.scorePlayer1 === 4 ? match.player1.country :  match.player2.country
    }
}

const getListFullInfoMatches = (listMatches) => {
    let listFullInfo = []
    for (const match of listMatches) {
        listFullInfo.push(getMatchInfoDetail(match))
    }
    return listFullInfo
}

module.exports = {createMatch, playMatch, getListFullInfoMatches}
