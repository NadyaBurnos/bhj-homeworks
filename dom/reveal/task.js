const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    reveal.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
});
