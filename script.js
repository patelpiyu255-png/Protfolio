// Mobile navigation menu
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// Contact form interaction
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});