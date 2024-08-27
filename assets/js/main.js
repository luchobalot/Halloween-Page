// Se llama a la función con el nombre de la función y los parámetros
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// Se abre el Menu en dispositivos moviles.
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu") // Se agrega la clase show-menu al menu.
    });
}

// Se cierra el Menu en dispositivos moviles.
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu") // Se remueve la clase show-menu.
    });
}

// Scroll Reveal - Propiedades de la misma libreria
const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2000, // Tiempo de duración de la animación (2seg).
    delay: 300, // Tiempo de retraso de la animación (0.3seg).
    reset: true // Se resetea la animación cuando se hace scroll.
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter_container`)

sr.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100}) // inerval es el tiempo de retraso de la animación.

// "origin" es la posición de la animación
sr.reveal(`.about__data, .discount__img`, {origin: "left"}) // aparece de la izquierda a la derech).

sr.reveal(`.about__img, .discount__data`, {origin: "right"}) // aparece de la derecha a la izquierda.