let playButton = document.getElementById('play');
let stopButton = document.getElementById('stop');

// Ajoutez un gestionnaire d'événements au bouton "Play"
playButton.addEventListener('click', function () {
    // Rend le bouton "Play" invisible
    playButton.style.display = "none";
    // Rend le bouton "Stop" visible
    stopButton.style.display = "block";
});

let travailtemps = document.getElementById('tmpstravail');
let pausetemps = document.getElementById('tmpspause');

travailtemps.addEventListener('change', ()=>{
localStorage.setItem('travailtemps', travailtemps.value)
let test = /^(?:[1-9]|[1-5][0-9]|60)$/.test(travailtemps.value);

})
pausetemps.addEventListener('change', ()=>{
    localStorage.setItem('pausetemps', pausetemps.value)
    let test2 = /^(?:[1-9]|[1-5][0-9]|60)$/.test(travailtemps.value);
    
    })


let departpause = 5;
let departMinutes = 25;
if(localStorage.getItem('travailtemps') !== null){
    departMinutes = parseInt(localStorage.getItem('travailtemps'))
}
if(localStorage.getItem('pausetemps') !== null){
    departpause = parseInt(localStorage.getItem('pausetemps'))
}
let temps = departMinutes * 60;
let timerInterval;
let boucle = 0;


const timerElement = document.getElementById("timer");

let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
secondes = secondes < 10 ? "0" + secondes : secondes;
timerElement.innerText = `${minutes}:${secondes}`;


function start() {
    clearInterval(timerInterval);

    temps = departMinutes * 60;

    timerInterval = setInterval(() => {
        let minutes = parseInt(temps / 60, 10);
        let secondes = parseInt(temps % 60, 10);
        temps = temps <= 0 ? 0 : temps - 1;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;

        timerElement.innerText = `${minutes}:${secondes}`;
        console.log(boucle);
        if (temps === 0 && boucle < 1) {
            clearInterval(timerInterval);
            departMinutes = departpause;
            temps = departMinutes * 60;
            const timerElement = document.getElementById("timer");
            boucle++;
            start();
            document.body.style.backgroundColor = "green";
            let change = document.getElementById("travail");
            change.id = 'pause';

        }
    }, 1000);
}

function stop() {
    location.reload();
}



//recharge la page : location.reload();
//https://www.commentcoder.com/timer-javascript/