/*const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);*/

type="text/javascript">
        $(document).ready(function(){
//Animação da ">" seta menu!
          $('.sub-btn').click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
          });
//Animação Menu Hamburguer (Voltar para "X")
          $('.menu-btn').click(function(){
            $('.side-bar').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
          });
//Animação Menu "X" (Voltar para Menu Hamburguer)
          $('.close-btn').click(function(){
            $('.side-bar').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
          });


        });