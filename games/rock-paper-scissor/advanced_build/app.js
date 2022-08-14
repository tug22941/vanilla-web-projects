const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) =>{
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) =>{
    switch( userChoice + computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            resultDisplay.innerHTML = 
                "You Chose: " + userChoice + "\n" + 
                "Computer Chose: " + computerChoice + "\n" + 
                "You Win"
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            resultDisplay.innerHTML = 
            "You Chose: " + userChoice + "\n" + 
            "Computer Chose: " + computerChoice + "\n" + 
            "You Lose"
            break
        default :
            resultDisplay.innerHTML = 
            "You Chose: " + userChoice + "\n" + 
            "Computer Chose: " + computerChoice + "\n" + 
            "Its a Draw"
        
    }
}
