const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSize.forEach((size) => {
    size.addEventListener('click', (event) => {
        event.preventDefault();

        fontSize.forEach(e => e.classList.remove('font-size_active'));
        event.target.classList.add('font-size_active');

        book.classList.remove('book_fs-big', 'book_fs-small');
        if (event.target.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (event.target.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});
