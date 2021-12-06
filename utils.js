const SYSTEM_MESSAGES = {
    INIT_SIMULATION :"INICIALIZANDO SIMULACIÓN",
    FINISH_SIMULATION :"FINALIZANDO SIMULACIÓN",
    INFO_BALLOON_WORLDCUP : (round, numMatches) =>{
        return `BALLOON WORLD CUP RONDA ${round} CON ${numMatches} PARTIDOS`
    },
    COMPETITION_WINNER : (winnerPlayer) => {
        return `La persona ganadora del torneo es:  ${winnerPlayer[0].name} de ${winnerPlayer[0].country}`
    } 
}

module.exports = SYSTEM_MESSAGES