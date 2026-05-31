const header = document.querySelector('.anime-header');

document.addEventListener('mousemove', (e) => {
    if (e.clientY <= 100) {
        header.classList.remove('oculto');
    }
});

header.addEventListener('mouseleave', () => {
    header.classList.add('oculto');
});
