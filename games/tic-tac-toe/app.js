//add event listener on Window for DomConentLoaded event
//to load HTML elements (JS script tag declared before HTML elelments)
window.addEventListener('DOMContentLoaded',()=>{

    //retrieve dynamic/functional game elements from HTML page
    const playerDisplay = document.querySelector('.display-player')
    const gameTiles = Array.from(document.querySelectorAll('.tile'))
    const endGameDisplay = document.querySelector('.announcer')
    const resetButton = document.querySelector('#reset')

    //declare array to track gameboard, variable to track current player
    // and variable to track running gamestate
    let gameBoard = ['','','','','','','','',''] //internal board
    let currentPlayer = 'X' //current player is X to start
    let gameActive = true;

    //declare variables to track the 3 endgame states
    const PLAYERX_WON = 'PLAYERX_WON'
    const PLAYERO_WON = 'PLAYERO_WON'
    const TIE = 'TIE'

    //declare array of arrays to hold all winning tile combinations
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


                    ///EVENT HANDLERS//

    //event responsible for calling userAction method for current user tile selection
    gameTiles.forEach((tile,index) =>{
        //laod the user action method for the current tile
        tile.addEventListener('click',() => userAction(tile,index))
    });

    //event responsible for resetting the gameboard
    resetButton.addEventListener('click',() =>{
        //set gameboard, current player and gamestate to begninng values
        gameBoard = ['','','','','','','','','']
        currentPlayer = 'X' 
        gameActive = true;
        endGameDisplay.classList.add('hide')
        
        //reset the innertext and remove players class from each tile
        gameTiles.forEach(tile =>{
            tile.innerText = ''
            tile.classList.remove('playerX')
            tile.classList.remove('playerO')
        })
    });

    

                        ///FUNCTIONS//

    //function responsible for assigning selected tile to current user
    const userAction = (tile, index) => {
        if(isValidAction(tile) && gameActive){
            tile.innerText = currentPlayer
            tile.classList.add(`player${currentPlayer}`)
            updateBoard(index)          //call method to update gameboard internal array
            handleResultValidation();   //call method to check for winner
            changePlayer();
        }
    }

    //function responsilbe for determining whether selected tile is already in use
    const isValidAction = (tile) =>{
        if(tile.innerText === 'X' || tile.innerText === 'O'){
            return false
        }
        return true;
    }

    //function responsible for updating the value of the gameboard internal array with current player icon at index
    const updateBoard = (index) =>{
        gameBoard[index] = currentPlayer
    }

    //function responsible for checking the board for winning combination and endgame dispay method
    const handleResultValidation = () =>{
        let roundWon = false
        //iterate through every winning combination
        //determine whether winning combination was picked
        for(let i=0; i<=7; i++){
            //obtain a single (the current) array form the winning conditions array of arrays
            const winningCondition = winningConditions[i]
            //obtain the 3 value from the winning condition array
            const a = gameBoard[winningCondition[0]]
            const b = gameBoard[winningCondition[1]]
            const c = gameBoard[winningCondition[2]]

            //determine whether the winning condidion was met
            if( a === '' || b === '' || c === ''){
                continue        //continue loop
            }
            else if(a === b && b === c){
                roundWon = true; //update roundWon variable
                break;           // break from loop
            }
        }

        //determine endgame variable value, and endgame display based on roundWon value
        if(roundWon){
            changeEndgameDisplay(currentPlayer === 'X'? PLAYERX_WON: PLAYERO_WON)
            gameActive = false
            return
        }
        else if(!gameBoard.includes('')){
            changeEndgameDisplay(TIE)
        }
    }

    //function responsible for updating and displaying the end game of the game
    const changeEndgameDisplay = (type) =>{
        //delcare a switch statement to determine the end game state of the game
        // update announce element innerHTML and display element
        switch(type){
            case PLAYERX_WON:
                endGameDisplay.innerHTML = 'Player <span class="PlayerX">X</span> Won'
                break
            case PLAYERO_WON:
                endGameDisplay.innerHTML = 'Player <span class="PlayerO">O</span> Won'
                break
            case TIE:
                endGameDisplay.innerHTML = "It's a Tie"
                break
        }
        endGameDisplay.classList.remove('hide') //display the HTML
    }

    //function responsible alternating the current player display
    const changePlayer = () =>{
        playerDisplay.classList.remove(`player${currentPlayer}`)    //remove previous current player class
        currentPlayer = currentPlayer === 'X'?'O': 'X'              // reassign current player variable decision
        playerDisplay.innerHTML = currentPlayer
        playerDisplay.classList.add(`player${currentPlayer}`)       //add next current player class
        

    }
})