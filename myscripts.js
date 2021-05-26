// let playerSelection
// let playerWinTotal = 0
// let computerWinTotal = 0
// let computerSelection
// let rock
// let paper

function game() {
  function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
  }
  const computerSelection = computerPlay()
  let playerSelection
  let computerScore = 0
  let playerScore = 0

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++
      return `Paper beats rock. You lose! The score is player ${playerScore} computer ${computerScore}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerScore++
      return `Rock beats scissors. You win! The score is player ${playerScore} computer ${computerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++
      return `Paper beats rock. You win! The score is player ${playerScore} computer ${computerScore}`
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      computerScore++
      return `Scissors beat paper. You lose! The score is player ${playerScore} computer ${computerScore}`
    } else if (
      playerSelection === 'scisssors' &&
      computerSelection === 'rock'
    ) {
      computerScore++
      return `Rock beats scissors. You lose! The score is player ${playerScore} computer ${computerScore}`
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      playerScore++
      return `Scissors beat paper. You win! The score is player ${playerScore} computer ${computerScore}`
    } else {
      return `It's a tie! The score is player ${playerScore} computer ${computerScore}`
    }
  }

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Type: Rock, Paper, or Scissors')
    const computerSelection = computerPlay()
    // playRound(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    // playRound()
  }
  if (playerScore === computerScore) {
    console.log(
      `Wow somehow you managed to tie the game. The score was player ${playerScore} computer ${computerScore}. Play again.`
    )
  } else if (playerScore >= computerScore) {
    console.log(
      `The final score is player ${playerScore} computer ${computerScore}. Congrats! you won the game.`
    )
  } else {
    console.log(
      `Final score is player ${playerScore} computer ${computerScore}. You lose. try again.`
    )
  }
}

game()
