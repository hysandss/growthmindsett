// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hamburger Menu - Auto-Tutup Saat Menu Diklik
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuItems = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Testimoni Scroll - Tanpa Smooth Behavior
const testimonialsContainer = document.querySelector('.testimonials-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 15;

leftBtn.addEventListener('click', () => {
    testimonialsContainer.scrollLeft -= cardWidth;
});

rightBtn.addEventListener('click', () => {
    testimonialsContainer.scrollLeft += cardWidth;
});

testimonialsContainer.addEventListener('scroll', () => {
    const scrollLeft = testimonialsContainer.scrollLeft;
    const maxScroll = testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth;
    leftBtn.disabled = scrollLeft <= 0;
    rightBtn.disabled = scrollLeft >= maxScroll - 1;
});