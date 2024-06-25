document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const navToggle = document.createElement('button');
    navToggle.innerText = 'Menu';
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
    document.querySelector('header .container').appendChild(navToggle);
});
