    let cookie = document.getElementById('cookie');
    let clicker__counter = document.getElementById('clicker__counter');
    let clicks = 0;
    let clickTime1;
    let clickTime2 = new Date().getTime();
    let clickSpeed = document.getElementById('click_speed');
    
    cookie.onclick = function () {
        clicks++;
        clicker__counter.textContent = clicks;
    }

    cookie.addEventListener('mousedown', function () {
       clickTime1 = new Date().getTime();
        cookie.style.width = '220px';
    });

    cookie.addEventListener('mouseup', function () {
        let clickSpeed1 = (new Date().getTime() - clickTime1) / 1000;
        clickSpeed.textContent = clickSpeed1.toFixed(2);
        cookie.style.width = '200px';
    });

    
