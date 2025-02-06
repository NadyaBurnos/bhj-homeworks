const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSize.forEach((size) => {
    size.addEventListener('click', (event) => {
        event.preventDefault();
        book.classList.remove('book_fs-big', 'book_fs-small');
        if (event.target.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (event.target.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});
