const btnPlay = document.querySelector('.btn-play');
const loader = document.querySelector('.loader');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


let showMenu = false;
let showPage = false;

const audio = document.getElementById("audio");

btnPlay.addEventListener('click', togglePage);


menuBtn.addEventListener('click', toggleMenu);

function togglePage() {
    if(!showPage) {
        loader.classList.add('hide-loader');
        showMenu = true;
        audio.play();
    } else {
        
    }
};


function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'))
        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'))
        //set menu state
        showMenu = false;
    }
};

