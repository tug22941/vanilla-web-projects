const cookieWhole =  document.querySelector('.cookie-whole');
const cookieBite = document.querySelector('.cookie-bite');

cookieBite.addEventListener("click", ()=>{
    if(!cookieBite.classList.contains('active')){
        cookieBite.classList.add('active');
        cookieWhole.classList.remove('active');
    }
})

cookieWhole.addEventListener("click", ()=>{
    if(!cookieWhole.classList.contains('active')){
        cookieWhole.classList.add('active');
        cookieBite.classList.remove('active');
    }
})