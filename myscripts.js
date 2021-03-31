const movesArray = ['rock', 'paper', 'scissors']

const rand = movesArray[Math.floor(Math.random() * movesArray.length)]

function computerPlay() {
    return rand
}

function singleRound(a,b) {
    const playerSelection = a
    const computerSelection = b
}

console.log(computerPlay())