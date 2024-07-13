// JavaScript para rolagem suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// JavaScript para efeito de fade-in
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = 1;
});
// JavaScript para menu de navegação responsivo
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
