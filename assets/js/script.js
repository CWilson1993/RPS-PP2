const computerPickDisplay = document.getElementById('comp-pick') //gets the location in the HTML by the class name
const userPickDisplay = document.getElementById('user-pick')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userPick
let computerPick
let result


choices.forEach(choice => choice.addEventListener('click', (e) => {
    userPick = e.target.value
    userPickDisplay.innerHTML = userPick
    generateComputerPick()
    getResult()
}))

function generateComputerPick() {
    const randomPick = Math.floor(Math.random() * choices.length) + 1

    if (randomPick === 1) {
        computerPick = 'Rock'
    }
    if (randomPick === 2) {
        computerPick = 'Paper'
    }
    if (randomPick === 3) {
        computerPick = 'Scissors'
    }
    computerPickDisplay.innerHTML = computerPick

}

const getResult = () => {
    switch (userPick + computerPick) {
        case 'ScissorsPaper':
            resultDisplay.innerHTML = userPick + " cuts " + computerPick + ", you win!" 
            break
        case 'RockScissors':
            resultDisplay.innerHTML = userPick + " smashes " + computerPick + ", you win!" 
            break
        case 'PaperRock':
            resultDisplay.innerHTML = userPick + " covers " + computerPick + ", you win!" 
            break
        case 'PaperScissors':
            resultDisplay.innerHTML = "Oh no you lose as  " + computerPick + " covers " + userPick
            break
        case 'ScissorsRock':
            resultDisplay.innerHTML = "Oh no you lose as  " + computerPick + " smashes " + userPick
        case 'RockPaper':
            resultDisplay.innerHTML = "Oh no you lost as " + computerPick + " covers " + userPick
            break
        case 'PaperPaper':
        case 'ScissorsScissors':
        case 'RockRock':
            resultDisplay.innerHTML = "You both picked " + userPick + ", it's a draw!"
            break
    }
}