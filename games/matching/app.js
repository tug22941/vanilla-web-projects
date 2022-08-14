document.addEventListener('DOMContentLoaded', () => {

    //card options

    //card Array 
    var cardArray = [
        {
            name: 'bob',
            img: 'Images/bob_belcher.jpg'
        },
        {
            name: 'bob',
            img: 'Images/bob_belcher.jpg'
        },
        {
            name: 'cleveland',
            img: 'Images/cleveland_brown.jpg'
        },
        {
            name: 'cleveland',
            img: 'Images/cleveland_brown.jpg'
        },
        {
            name: 'hank',
            img: 'Images/hank_hill.jpg'
        },
        {
            name: 'hank',
            img: 'Images/hank_hill.jpg'
        },
        {
            name: 'homer',
            img: 'Images/homer_simpson.jpg'
        },
        {
            name: 'homer',
            img: 'Images/homer_simpson.jpg'
        },
        {
            name: 'peter',
            img: 'Images/peter_griffin.jpg'
        },
        {
            name: 'peter',
            img: 'Images/peter_griffin.jpg'
        },
        {
            name: 'stan',
            img: 'Images/stan_smith.jpg'
        },
        {
            name: 'stan',
            img: 'Images/stan_smith.jpg'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random());

    var grid = document.querySelector('.grid');
    var resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //game board

    function createBoard(){
        for(i = 0; i< cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/back.png');
            card.style.border = "thick solid black";
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //card flip
    function flipcard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch, 500)
        }
    }

    //check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] == cardsChosen[1]){
            alert('You found matching Cards!');
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
            cardsWon.push(cardsChosen);
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/back.png');
            cards[optionTwoId].setAttribute('src', 'images/back.png');
            alert('Sorry, try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length == cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }


    createBoard();
})