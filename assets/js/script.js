const computerPickDisplay = document.getElementById('comp-pick') //gets the location in the HTML by the class name
const userPickDisplay = document.getElementById('user-pick')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userPick
let computerPick
let result


choices.forEach(choice => choice.addEventListener('click', (e) => {
    userPick = e.target.id
    userPickDisplay.innerHTML = userPick
    generateComputerPick()
}))

function generateComputerPick() {
    const randomPick = Math.floor(Math.random() * choices.length) + 1

    if (randomPick === 1){
        computerPick = 'Rock'
    }
    if (randomPick === 2){
        computerPick = 'Paper'
    }
    if (randomPick === 3){
        computerPick = 'Scissors'
    }
    computerPickDisplay.innerHTML = computerPick

}
