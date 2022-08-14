const donut = document.getElementById('donut');

donut.addEventListener('mouseenter',()=>{
    if(!donut.classList.contains('hover')){
        donut.classList.add('hover');
    }
})

donut.addEventListener('mouseleave',()=>{
    if(donut.classList.contains('hover')){
        donut.classList.remove('hover');
    }
})