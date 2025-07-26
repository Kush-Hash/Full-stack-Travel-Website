// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("mainNavbar");
    const heroSection = document.querySelector(".hero-section");

    if (!navbar || !heroSection) return;

    const heroHeight = heroSection.offsetHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY > heroHeight - 80) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("navbar-solid");
        } else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("navbar-solid");
        }
    });

});

