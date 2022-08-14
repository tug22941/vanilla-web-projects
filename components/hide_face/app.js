const hiding = document.querySelector('.closed');
const showing = document.querySelector('.open');

// Add Event Listener
hiding.addEventListener('click',()=>{
    if(showing.classList.contains('open')){
        showing.classList.add('active');
        hiding.classList.remove('active');
    }
});

showing.addEventListener('click',()=>{
    if(hiding.classList.contains('closed')){
        hiding.classList.add('active');
        showing.classList.remove('active');
    }
})