const test = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            test.style.setProperty("--active-index", index)
        }
    });
let menu = document.querySelector('#menu-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    test.classList.toggle('menu-active');
}
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;")
})
document.addEventListener('mousedown', e => {
    cursor.style.transform = 'scale(.5)'

})
document.addEventListener('mouseup', e => {
    cursor.style.transform = 'scale(1)'

})