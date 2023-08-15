const buttonOpen = document.getElementById("button-open");
const menu = document.querySelector(".hamburger-menu");
buttonOpen.addEventListener('click', function(e) {
    menu.classList.add("is-open");
})

const buttonClosed = document.getElementById("button-close");
buttonClosed.addEventListener('click', function(e) {
    menu.classList.remove("is-open");
})

const dropdownOpen = document.querySelectorAll("section .dropdown-button");
for (const button of dropdownOpen) {
    button.addEventListener('click', function(e) {
        const nextSibling = button.nextElementSibling;
        nextSibling.classList.toggle("dropdown-open");
        button.classList.toggle("button-open");
    })
}
const dropdown = document.querySelectorAll("section .dropdown-options");
dropdownOpen.addEventListener('click', function(e) {
    dropdown.classList.add("dropdown-open");
})

