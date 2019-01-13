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
        btnPlay.classList.add('hide-btn');
        showMenu = true;
        audio.play();
        onloadPage();
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

// type writer effect
const typeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

typeWriter.prototype.type = function() {

    // current index of word
    const current = this.wordIndex % this.words.length;

    const fulltxt = this.words[current];

    if(this.isDeleting) {
        //remove character
        this.txt = fulltxt.substring(0, this.txt.length - 1)
    } else {
        //add character
        this.txt = fulltxt.substring(0, this.txt.length + 1)
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //type speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fulltxt) {
        //make pause at end of word
        typeSpeed = this.wait;

        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}


function onloadPage() {
    setTimeout(init, 12000);
};


function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    
    new typeWriter(txtElement, words, wait);
}

