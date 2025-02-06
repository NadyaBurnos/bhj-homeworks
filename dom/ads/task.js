function rotators() {
    const rotator = document.querySelectorAll('.rotator__case');

    for (let i = 0; i < rotator.length; i++) {
        const el = rotator[i];
        if (el.classList.contains('rotator__case_active')) {
            el.classList.remove('rotator__case_active');
            if (rotator[i + 1]) {
                rotator[i + 1].classList.add('rotator__case_active');
            } else {
                rotator[0].classList.add('rotator__case_active');
            }

            break;
        }
    }
    setTimeout(rotators, 1000);
}

rotators();
