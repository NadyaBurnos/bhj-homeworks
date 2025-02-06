const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    reveal.forEach((el) => {
        el.classList.remove('reveal_active');
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('reveal_active');
        }
    });
});
