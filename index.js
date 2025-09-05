const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const btnCloseMenu = document.querySelector('.btn-cerrar-menu')

menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
});

btnCloseMenu.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open')
})

document.addEventListener('click', (e) => {
    if (
        mobileMenu.classList.contains('open') &&  
        !mobileMenu.contains(e.target) && 
        !menuToggle.contains(e.target)
    ) {
        mobileMenu.classList.remove('open');
    }
});