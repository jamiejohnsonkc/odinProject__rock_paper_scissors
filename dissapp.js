var score = 1

console.log(score)

// creates node list
const moveBtns = document.querySelectorAll('.moveBtn')
const rockBtn = document.querySelector('#rockBtn')


moveBtns.forEach((button) => {
    button.addEventListener('click', () => {

      if (button.textContent === 'rock') {
        console.log(button.textContent)
        console.log(`1 ${score}`)
        
    return increaseScore()
    } 
      else {}
    })
  })

  console.log(`2 ${score}`)

  function increaseScore () {
    score++
}

console.log(`3 ${score}`)
increaseScore()
console.log(`4 ${score}`)
const results = document.querySelector('#results')
const scoreBox = document.createElement('div')
scoreBox.classList.add('scoreBox')
results.appendChild(scoreBox)

const subheading = document.querySelector('.scoreBox')
const subhead = document.createElement('h3')
subhead.textContent = `The Score is ${score}`
subheading.appendChild(subhead)
