const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        const tabActive = tab.classList.contains('tab_active');

        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tabContents.forEach(tabContent => tabContent.classList.remove('tab__content_active'));

        if (!tabActive) {
            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        } else {
            tabContents[index].classList.remove('tab__content_active');
        }
    });
});
