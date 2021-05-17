// let playerSelection
// let playerWinTotal = 0
// let computerWinTotal = 0
// let computerSelection
// let rock
// let paper

const optionsArray = ['rock', 'paper', 'scissors']
const rand = optionsArray[Math.floor(Math.random() * optionsArray.length)]

function computerPlay() {
  return rand
}

const computerSelection = computerPlay()

const playerSelection = prompt('select player move')
// const playerSelection = 'rock'

// console.log(playerSelection)

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {


  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return "it's a tie!"
  }
  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return "it's a tie!"
  }
  if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "it's a tie!"
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You win! Rock beats paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You win! Paper beats rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You win! Scissors beats paper'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return 'You lose! Rock beats scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    return 'You lose! Scissors beats paper'
  } else {
    return 'nope'
  }
}

let score = {
  playerWins: playerScore,
  computerWins: computerScore
}

console.log(playRound())

// function game () {
//   playRound()
// }

// game()

// console.log(playRound('rock', 'scissors'))

console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection))
// console.log('playerScore ' + playerScore)
// console.log('computerScore ' + computerScore)

// function game() { console.log(playerSelection) }

// function game() {
//   // let playerWinTotal = playerScore
//   // let computerWinTotal = computerScore
//   let i = 0
//   while (i < 5) {
//     playRound(i)
//     i++
//   }
//   if (playerScore > computerScore) {
//     return console.log('player wins the game!')
//   } else {
//     return console.log('computer wins the game!')
//   }
// }
// console.log(game())
// for (let i = 0; i < 5; i++) {
//   playRound()
// }
// if (playerScore > computerScore) {
//   return console.log('player wins the game!')
// } else {
//   return console.log('computer wins the game!')
// }

// console.log(playRound(playerSelection, computerSelection))
// console.log(playerScore)

// console.log(playerScore);
// for (playerWinTotal = 0; playerWinTotal < 3; playerWinTotal++) {
//   for (computerWinTotal = 0; computerWinTotal < 3; computerWinTotal++) {

// return singleRound()console.log(computerPlay());
// console.log(singleRound('scissors', 'paper'))
// console.log(gameWinner(1,2))
