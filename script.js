// Met une classe active sur le bouton de navigation correspondant à la section visible
const spans = document.querySelectorAll("main section span");
const nav = document.querySelectorAll("header a");

window.onscroll = function() {scrolling()};

function scrolling() {
    let current = "";

    let span, section;
    for (let i = 0; i < spans.length; i++) {
        span = spans[i];
        section = span.parentElement;
        if (window.scrollY <= section.offsetTop + section.offsetHeight * 0.7) {
            current = span.getAttribute("id");
            break;
        }
    }

    nav.forEach((button) => {
        button.classList.remove("active");
        if (button.classList.contains(current)) {
            button.classList.add("active");
        }
    });
}

// Ouvre le menu mobile
let link = document.getElementById('burger-button');
let burger = document.querySelector('header nav');

link.addEventListener('click', function(e) {
    e.preventDefault()
    burger.classList.toggle('open')
});

// Fermer le menu lorsqu'on clique sur un lien (sur mobile)
let a = document.querySelectorAll('header nav a');

a.forEach((button) => {
    button.addEventListener('click', function() {
        burger.classList.toggle('open')
    })
});