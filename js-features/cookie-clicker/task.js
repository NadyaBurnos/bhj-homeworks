const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('click_speed');
let clicks = 0;
let clickTime1 = Date.now();

cookie.onclick = function () {
    clicks++;
    clickerCounter.textContent = clicks;
}

cookie.addEventListener('mousedown', function () {
    cookie.style.width = '220px';
});

cookie.addEventListener('mouseup', function () {
    const clickTime2 = Date.now() - clickTime1;
    
    clickSpeed.textContent = (1000 / clickTime2).toFixed(2);
    clickTime1 = Date.now();

    cookie.style.width = '200px';
});
