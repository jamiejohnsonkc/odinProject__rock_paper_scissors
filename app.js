// creates node list
const moveBtns = document.querySelectorAll('.moveBtn')
const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')

let playerSelection = ''


// iterate through the node list items
moveBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e)
    if (button.textContent === 'rock') {
      playerSelection = 'rock'
    }
    if (button.textContent === 'paper') {
      playerSelection = 'paper'
    }
    if (button.textContent === 'scissors') {
      playerSelection = 'scissors'
    }
    playRound()
    logScore()
 
  })
})

function choosePcMove() {
  const moves = ['rock', 'paper', 'scissors']
  const random = Math.floor(Math.random() * moves.length)
  return moves[random]
}


function logScore () {
  var playerScore = 0
  var computerScore = 0
  console.log(`end ${playerScore} and ${computerScore}`)
}

function playRound() {
  const computerSelection = choosePcMove()

 
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    // console.log(playerScore, computerScore)
    computerScore++
    // return computerScore
    // return console.log(
    //   `Paper beats rock. You lose! The score is player ${playerScore} computer ${computerScore}`
    // )
  } if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    // return playerScore
    // return console.log(
    //   `Rock beats scissors. You win! The score is player ${playerScore} computer ${computerScore}`
    // )
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    // return playerScore
    // return console.log(
    //   `Paper beats rock. You win! The score is player ${playerScore} computer ${computerScore}`
    // )
  } if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    // return computerScore
    // return console.log(
    //   `Scissors beat paper. You lose! The score is player ${playerScore} computer ${computerScore}`
    // )
  } if (playerSelection === 'scisssors' && computerSelection === 'rock') {
    computerScore++
    // return computerScore
    // return console.log(
    //   `Rock beats scissors. You lose! The score is player ${playerScore} computer ${computerScore}`
    // )
  } if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    // return playerScore
    // return console.log(
    //   `Scissors beat paper. You win! The score is player ${playerScore} computer ${computerScore}`
    // )
  } else {
    // return console.log(
    //   `It's a tie! The score is player ${playerScore} computer ${computerScore}`
    // )
  }
console.log(playerScore, computerScore)
return {playerScore, computerScore}
}



const results = document.querySelector('#results')
const scoreBox = document.createElement('div')
scoreBox.classList.add('scoreBox')
results.appendChild(scoreBox)

const subheading = document.querySelector('.scoreBox')
const subhead = document.createElement('h3')
subhead.textContent = 'The Score is'
subheading.appendChild(subhead)

const scores = document.createElement('div')
scores.classList.add('scores')
const scoresStyle = document.getElementsByTagName('h4')
scoreBox.appendChild(scores)
console.log(scoresStyle)

const playerLabel = document.createElement('h4')
playerLabel.textContent = 'You'
scores.appendChild(playerLabel)

const playerTally = document.createElement('h4')
playerTally.innerText = (`${window.playerScore}`)
scores.appendChild(playerTally)

const cpuLabel = document.createElement('h4')
cpuLabel.innerText = 'CPU'
scores.appendChild(cpuLabel)

const cpuTotal = document.createElement('h4')
cpuTotal.innerText = window.computerScore
scores.appendChild(cpuTotal)

