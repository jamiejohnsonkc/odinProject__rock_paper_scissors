const moves = document.getElementsByClassName('move')
let playerSelection = ''
let computerSelection = ''
let player1Score = 0
let cpuScore = 0
let score = document.querySelector('#score')
let result = document.querySelector('#result')
let outcome = document.querySelector('#outcome')

console.log(moves)

Array.from(moves).forEach((move) => {
  move.addEventListener('click', (e) => {
    playerSelection = move.innerText
    console.log(`event ${playerSelection} ${computerSelection}`)
    playRound()
    logScore()
  })
})

// options = Array.from(moves)
function cpuSelect() {
  var select = moves[Math.floor(Math.random() * moves.length)]
  computerSelection = select.innerText
} // result.onclick = () => (result.style.display = 'none')

// Array.from(options).forEach((move) => {
//   var txt = move.textContent || move.innerText
//   computerSelection = txt
// })

function playRound() {
  cpuSelect()
  console.log(`playround ${playerSelection} ${computerSelection}`)
  if (playerSelection === computerSelection) {
    result.style.display = 'block'
    result.textContent =
      'You both chose' + ' ' + playerSelection + '. ' + 'lame.'
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result.style.display = 'block'
    result.textContent = 'You chose wisely.  Well done.'
    player1Score++
  } else {
    result.style.display = 'block'
    result.textContent = 'You lose fuckface. Try again.'
    cpuScore++
  }
  score.style.display = 'block'
  score.textContent = 'The score is ' + player1Score + ' to ' + cpuScore + '.'
  if (cpuScore === 5) {
    result.textContent = 'game over man. game over.'
    result.onclick = () => {
      window.location.reload(false)
    }
  } else if (player1Score === 5) {
    result.textContent = 'you are victorious'
    result.onclick = () => {
      window.location.reload(false)
    }
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
