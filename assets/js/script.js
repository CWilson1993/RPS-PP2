const computerPickDisplay = document.getElementsByClassName('comp-pick'); //gets the location in the HTML by the class name
const userPickDisplay = document.getElementsByClassName('user-pick');
const resultDisplay = document.getElementsByClassName('result');
const choices = document.querySelectorAll('button');
let userPick;
let computerPick;
let result;

choices.forEach(choice => choice.addEventListener('click', (e) => { 
    userPick = e.target.id;
    userPickDisplay.innerHTML = userPick;
    generateComputerPick();
    getResult();
}));





