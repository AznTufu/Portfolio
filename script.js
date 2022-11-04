// --- CURSOR ---
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', 'top:' + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;")
    })

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
})

// --- Menu hover ---
const test = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            test.style.setProperty("--active-index", index)
        }
    });

// --- Burger MENU SCRIPT ---
let menu = document.querySelector('#menu-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    test.classList.toggle('menu-active');
}

// --- PROJECT CAROUSEL NAVIGATION ---

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

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