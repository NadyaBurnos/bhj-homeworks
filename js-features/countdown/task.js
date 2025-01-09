let timer; 
let t = 59;

countdown(); 

function countdown(){  
     document.getElementById('timer').innerHTML = t;
    t--;
    if (t<0){
        clearTimeout(timer); 
        alert ("Вы победили в конкурсе!");
    }
    else {
        timer = setTimeout(countdown, 1000); 
    }
}
