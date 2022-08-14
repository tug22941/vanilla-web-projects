const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice
    generateComputerChoice()
    getResults()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + randomChoice;
}

for (let i = 0; i< choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] // you can delete this if you wANT to use 'e.target.HTML' in the handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResults = () =>{
    switch( userChoice + computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            resultDisplay.innerHTML = "You Win"
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            resultDisplay.innerHTML = "You Lose"
            break
        default :
            resultDisplay.innerHTML = "Its a Draw"
        
    }
}




