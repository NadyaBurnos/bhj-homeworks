    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    const holes = document.querySelectorAll('.hole');
    let counterDead = 0;
    let counterLost = 0;

    getHole = index => document.getElementById(`hole${index}`);
    holes.forEach((hole, index) => {
        hole.addEventListener( 'click', function() {
            if (hole.classList.contains( 'hole_has-mole')){
                counterDead++;
                dead.textContent = counterDead;
            } else {
                counterLost++;
                lost.textContent = counterLost;
            }
    
            if (counterDead === 10) {
                game('Победа! Вы победили кротов!');
            } else if (counterLost === 5) {
                game('Игра окончена! Вы проиграли.');
            }
        });
            function game(message) {
                alert(message);
                counterDead = 0;
                counterLost = 0;
                dead.textContent = score;
                lost.textContent = misses;
            }
    });
