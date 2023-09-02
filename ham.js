const hamburger = document.querySelector('.dropdown')
const nav = document.querySelector('nav')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})
