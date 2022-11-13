const spans = document.querySelectorAll("main section span");
const nav = document.querySelectorAll("header a");

window.onscroll = function() {myFunction()};

function myFunction() {
    var current = "";

    var span, section;
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

/* Sélection des éléments HTML */
let link = document.getElementById('burger-button')
let burger = document.querySelector('header nav')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
    e.preventDefault()
    burger.classList.toggle('open')
})