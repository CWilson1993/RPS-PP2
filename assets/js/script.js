const computerPickDisplay = document.getElementById('comp-pick') //gets the location in the HTML by the class name
const userPickDisplay = document.getElementById('user-pick')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userPick
let computerPick
let result

// Event listener for button click
choices.forEach(choice => choice.addEventListener('click', (e) => {
    userPick = e.target.value
    userPickDisplay.innerHTML = userPick
    generateComputerPick()
    getResult()
}))

//function to get computer's choice
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

// function to get the result based on user and computer choices
const getResult = () => {
    switch (userPick + computerPick) {
        case 'ScissorsPaper':
            resultDisplay.innerHTML = userPick + " cuts " + computerPick + ", you win!"
            userScoreIncrement()
            break
        case 'RockScissors':
            resultDisplay.innerHTML = userPick + " smashes " + computerPick + ", you win!"
            userScoreIncrement()
            break
        case 'PaperRock':
            resultDisplay.innerHTML = userPick + " covers " + computerPick + ", you win!"
            userScoreIncrement()
            break
        case 'PaperScissors':
            resultDisplay.innerHTML = "You lose as  " + computerPick + " cuts " + userPick
            compScoreIncrement()
            break
        case 'ScissorsRock':
            resultDisplay.innerHTML = "You lose as  " + computerPick + " smashes " + userPick
            compScoreIncrement()
            break
        case 'RockPaper':
            resultDisplay.innerHTML = "You lost as " + computerPick + " covers " + userPick
            compScoreIncrement()
            break
        case 'PaperPaper':
        case 'ScissorsScissors':
        case 'RockRock':
            resultDisplay.innerHTML = "You both picked " + userPick + ", it's a draw!"
            break
    }
}

// function to increment user's score
function userScoreIncrement() {

    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

//function to increment computer's score
function compScoreIncrement() {

    let oldScore = parseInt(document.getElementById("comp-score").innerText);
    document.getElementById("comp-score").innerText = ++oldScore;
}