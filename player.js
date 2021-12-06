const {getBDPlayers} = require('./database')

let listPlayers = [];

const createPlayer = (idPlayer, playerFromDB) => {
    return {
        idPlayer: idPlayer,
        name: playerFromDB.name,
        country: playerFromDB.country,
        speed:playerFromDB.speed,
        strength: playerFromDB.strength,
        hitBalloon:  () =>{
            return playerFromDB.strength * Math.random()
        },
        successRecievedBalloon : (distance_of_shoot) =>{
            return distance_of_shoot < playerFromDB.speed * Math.random()
        }
    }
}

const initializePlayers = (listBDPlayers) => {
    let idPlayer = 1
    for (let player of listBDPlayers){
        let newPlayer = createPlayer(idPlayer,player)
        listPlayers.push(newPlayer)
        idPlayer++
    }
}

initializePlayers(getBDPlayers())

module.exports = listPlayers