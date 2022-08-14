const close = document.querySelector('.closed');
const open = document.querySelector('.open');

close.addEventListener('mouseenter',()=>{
    if(open.classList.contains('open')){
        open.classList.add('active');
        close.classList.remove('active');
    }
})

open.addEventListener('mouseleave',()=>{
    if(close.classList.contains('closed')){
        close.classList.add('active');
        open.classList.remove('active');
    }
})