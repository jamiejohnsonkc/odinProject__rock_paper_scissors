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

function cpuSelect() {
  var select = moves[Math.floor(Math.random() * moves.length)]
  computerSelection = select.innerText
}

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
