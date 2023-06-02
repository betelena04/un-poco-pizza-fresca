// -----------    Hamburger Menu    -----------------
const btn = document.getElementById('menu-btn');
const hamburgerLines = document.querySelectorAll('.hamburger > div');
const mobileMenu = document.getElementById('mobile-menu');

let buttonClicks = 0;

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');

    
    buttonClicks++;
    
    mobileMenu.classList.toggle('show');
}

// -----------    Parraplex    -----------------

    window.addEventListener("scroll", function() {
        var scrollAmount = window.pageYOffset;
        document.documentElement.style.setProperty("--scroll-amount", scrollAmount + "px");
      });