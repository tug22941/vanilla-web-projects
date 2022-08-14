// Create selectors for the User Choice, Computer Choice, and Results <Span> elements
const userDisplay = document.getElementById('user-choice')
const computerDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
//Create selector for all <button> elements
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//Create button click event for each possible choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice //display user choice
    //call function that computes and display compouter choice
    generateComputerChoice()
    GetResult()
}))


//Function that randomly computer choice then displays it
function generateComputerChoice(){
    const randomNumber = Math.floor( Math.random() * possibleChoices.length + 1)

    //assign computer choice value depending on random nubmer
    switch(randomNumber){
        case 1:
            computerChoice = 'rock'
            break
        case 2:
            computerChoice = 'paper'
            break
        case 3:
            computerChoice = 'scissors'
            break
    }
    computerDisplay.innerHTML = computerChoice
}

//Function that determines and display the result of the match
function GetResult(){

    if(userChoice === computerChoice){
        result = "It's a Draw!"
    }
    else if(userChoice === 'rock'){
        if(computerChoice == 'scissors'){result = 'You Win!'}
        else{result = 'You Lose!'} 
    }
    else if(userChoice === 'paper'){
        if(computerChoice == 'rock'){result = 'You Win!'}
        else{result = 'You Lose!'} 
    }
    else if(userChoice === 'scissors'){
        if(computerChoice == 'paper'){result = 'You Win!'}
        else{result = 'You Lose!'} 
    }
    
    //display the result
    resultDisplay.innerHTML = result
}