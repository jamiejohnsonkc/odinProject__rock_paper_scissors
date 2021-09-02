const moves = document.getElementsByClassName('move')
let playerSelection = ''
let computerSelection = ''
let player1Score = 0
let cpuScore = 0

console.log(moves)

Array.from(moves).forEach((move) => {
  move.addEventListener('click', (e) => {
    playerSelection = move.innerText
    console.log(`event ${playerSelection} ${computerSelection}`)
    playRound(playerSelection, computerSelection)
    logScore()
  })
})

Array.from(moves).forEach((move) => {
  var txt = move.textContent || move.innerText
  computerSelection = txt
})

var elem = document.getElementById('rock')
var txt = elem.textContent || elem.innerText

function playRound() {
  console.log(`playround ${playerSelection} ${computerSelection}`)
  if (playerSelection === computerSelection) {
    console.log('tie!')
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    player1Score++
  } else {
    cpuScore++
  }
}

function logScore() {
  console.log(`log score player ${player1Score} cpu ${cpuScore}`)
}

///////////////////////////////////

// const results = document.querySelector('#results')
// const scoreBox = document.createElement('div')
// scoreBox.classList.add('scoreBox')
// results.appendChild(scoreBox)

// const subheading = document.querySelector('.scoreBox')
// const subhead = document.createElement('h3')
// subhead.textContent = 'The Score is'
// subheading.appendChild(subhead)

// const scores = document.createElement('div')
// scores.classList.add('scores')
// const scoresStyle = document.getElementsByTagName('h4')
// scoreBox.appendChild(scores)
// console.log(scoresStyle)

// const playerLabel = document.createElement('h4')
// playerLabel.textContent = 'You'
// scores.appendChild(playerLabel)

// const playerTally = document.createElement('h4')
// playerTally.innerText = (`${window.player1Score}`)
// scores.appendChild(playerTally)

// const cpuLabel = document.createElement('h4')
// cpuLabel.innerText = 'CPU'
// scores.appendChild(cpuLabel)

// const cpuTotal = document.createElement('h4')
// cpuTotal.innerText = window.cpuScore
// scores.appendChild(cpuTotal)
