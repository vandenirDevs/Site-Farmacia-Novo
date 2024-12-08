const menuHamburguer = document.querySelector('.menu-hamb'); menuHamburguer.addEventListener('click', ()=> {
    toggleMenu();
})

function toggleMenu() {
    const nav = document.querySelector('.nav-responsivo');
    menuHamburguer.classList.toggle('change');
    
    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    }

    else {
        nav.style.display = 'none';
    }
}