// --- Cursor ---
const cursor = document.querySelector('.cursor');

//  Centre le cursor selon les valeurs pageY et pageX par rapport à la taille du curseur
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;")
})


document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
})

// --- Image Hover ---
const imghover = document.querySelector('.hover-image');
const imghover2 = document.querySelector('.hover-image2');
const imghover3 = document.querySelector('.hover-image3');
document.addEventListener('mousemove', e => {
    imghover.setAttribute('style', 'top:' + (e.pageY) + "px; left:" + (e.pageX) + "px;")
    imghover2.setAttribute('style', 'top:' + (e.pageY) + "px; left:" + (e.pageX) + "px;")
    imghover3.setAttribute('style', 'top:' + (e.pageY) + "px; left:" + (e.pageX) + "px;")
})

// --- Menu hover ---
const test = document.getElementById("menu");

//  Pour chaque élement que la souris hover l'élement la position du background change
Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            test.style.setProperty("--active-index", index)
        }
    });

// --- Burger menu ---
let menu = document.querySelector('#menu-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    test.classList.toggle('menu-active');
}

// --- Projects carousel navigation ---

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

// Opération ternaire, si activeIndex - 1 >= 0 alors c'est vrai activeIndex - 1 sinon slides.length - 1
// puis on attribut le status after ou before
const LeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

// Opération ternaire, si activeIndex + 1 <= slides.length - 1 alors c'est vrai activeIndex + 1 sinon 0

const RightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}