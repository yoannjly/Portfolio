const anchors = document.querySelectorAll("main section span");
const nav_buttons = document.querySelectorAll("header nav a.button");
const menu_button = document.querySelector('header a.menu-button');
const menu = document.querySelector('header nav');

// Ouvre le menu mobile
menu_button.addEventListener('click', function (e) {
    e.preventDefault()
    menu.classList.toggle('open')
});

// Fermer le menu lorsqu'on clique sur un lien (sur mobile)
nav_buttons.forEach((button) => {
    button.addEventListener('click', function () {
        menu.classList.toggle('open')
    })
});

// Met une classe active sur le bouton de navigation correspondant à la section visible
window.onscroll = function () {
    scrolling()
};

function scrolling() {
    let current = "";

    let span, section;
    for (let i = 0; i < anchors.length; i++) {
        span = anchors[i];
        section = span.parentElement;
        if (window.scrollY <= section.offsetTop + section.offsetHeight * 0.65) {
            current = span.getAttribute("id");
            break;
        }
    }
    console.log(current);

    nav_buttons.forEach((button) => {
        button.classList.remove("active");
        if (button.classList.contains(current)) {
            button.classList.add("active");
        }
    });
}