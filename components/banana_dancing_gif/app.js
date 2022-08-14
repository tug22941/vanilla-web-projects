const body = document.body;
let running = true;

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function start(){
    if(running){
        body.style.background = getRandomColor();
    }
    setTimeout(start, 1000);
}

body.addEventListener('click', ()=>{
    if(running){
        running = false;
    }
    else{
        running = true;
        start();
    }
})
