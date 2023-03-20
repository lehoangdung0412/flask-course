const toggle = document.getElementById('toggle');
const section = document.querySelector('section');
const input = document.querySelectorAll('input')
toggle.addEventListener('click', () => {
    toggle.classList.toggle('bi-moon-fill');
    if (toggle.classList.toggle('bi-sun-fill')) {
        section.style.backgroundImage="url(static/img/dark.jpg)";
        section.style.color="#fff";
        for (let i = 0; i < input.length; i++) {
            input[i].style.color="#fff";
            input[i].style.transition='2s';
        }
        section.style.transition='2s';
    } else {
        section.style.backgroundImage="url(static/img/white.jpg)";
        section.style.color="midnightblue";
        for (let i = 0; i < input.length; i++) {
            input[i].style.color="midnightblue";
            input[i].style.transition='2s';
        }
        section.style.transition='2s';
    }
})
