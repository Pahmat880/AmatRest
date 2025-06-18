// scroll.js

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.querySelector(".tombol");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) { 
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}