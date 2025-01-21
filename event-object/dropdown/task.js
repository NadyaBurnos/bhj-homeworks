const dropdown = document.querySelectorAll('.dropdown');
const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        list.classList.remove('dropdown__list_active');
        value.textContent = item.textContent.trim();
    });
});
