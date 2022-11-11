const spans = document.querySelectorAll("div.container section span");
const nav = document.querySelectorAll("div.navbar a");

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
    };

    nav.forEach((button) => {
        button.classList.remove("active");
        if (button.classList.contains(current)) {
            button.classList.add("active");
        }
    });
}