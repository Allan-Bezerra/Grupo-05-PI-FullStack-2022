const btnMobile = document.getElementById('btn-mobile');

function btnMobile() {
    const menuCentral = document.getElementById('menu-central');
    menuCentral.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);