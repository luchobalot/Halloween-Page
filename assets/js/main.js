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

const navLink = document.querySelectorAll(".nav__link");

// Funcion para cerrar el menu al hacer click en un link.
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction)); // Se agrega un evento click a cada link.

// Swiper
const homeSwiper = new Swiper(".home-swiper", {
    spaceBetweenn: 30, // Espacio entre las imagenes.
    loop: "true", // Buccle infinito.
    pagination: {
        el: ".swiper-pagination", // Selecciona el elemento que contiene la paginacion.
        clickable: true, // Se puede hacer click en el elemento (puntitos de abajo).
    }
})

const newSwiper = new Swiper(".new-swiper", {
    centerdSlides: true, // Se centra el slide.
    slidesPreview: "auto", // Se muestran todos los slides.
    loop: "true", // Buccle infinito.
    spaceBetweenn: 16,
})


// Scroll up
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 460) {
        scrollUp.classList.add("show-scroll") // Se agrega la clase show-scroll.
    } else {
        scrollUp.classList.remove("show-scroll") // Se remueve la clase show-scroll.
    }
}

window.addEventListener("scroll", scrollUp);

// Sections active - Ver en que sección se encuentra el usuario.
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
    
        const sectionHeight = current.offsetHeight, // Se obtiene el alto del section.
                sectionTop = current.offsetTop - 58, // Se  obtiene el top del section.
                sectionId = current.getAttribute('id') // Se obtiene el id del section.

        // Si el scroll del usuario es mayor al top del section y menor al top mas el alto del section, entonces se agrega la clase active-link al link del menu.
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener("scroll",scrollActive)

// Scroll Reveal - Propiedades de la misma libreria
const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2000, // Tiempo de duración de la animación (2seg).
    delay: 300, // Tiempo de retraso de la animación (0.3seg).
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter_container`)

sr.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100}) // inerval es el tiempo de retraso de la animación.

// "origin" es la posición de la animación
sr.reveal(`.about__data, .discount__img`, {origin: "left"}) // aparece de la izquierda a la derech).

sr.reveal(`.about__img, .discount__data`, {origin: "right"}) // aparece de la derecha a la izquierda.