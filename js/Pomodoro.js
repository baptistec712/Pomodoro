var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');

// Ajoutez un gestionnaire d'événements au bouton "Play"
playButton.addEventListener('click', function () {
    // Rend le bouton "Play" invisible
    playButton.style.display = "none";
    // Rend le bouton "Stop" visible
    stopButton.style.display = "block";
});



let departMinutes = 25;
let temps = departMinutes * 60;
let timerInterval; // Cette variable stockera l'ID de l'intervalle
let boucle = 0;

const timerElement = document.getElementById("timer");

let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
secondes = secondes < 10 ? "0" + secondes : secondes;
timerElement.innerText = `${minutes}:${secondes}`;

function start() {
    // Si un intervalle précédent est en cours, on le supprime
    clearInterval(timerInterval);
    // Réinitialise le temps à sa valeur initiale
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
            departMinutes = 5;
            temps = departMinutes * 60;
            const timerElement = document.getElementById("timer");
            boucle++;
            start();
            document.body.style.backgroundColor = "green";
            let change = document.getElementById("travail");
            change.id = 'pause';

            // if (change) {
            //     document.body.style.backgroundColor = "red";
            //     let change = document.getElementById("pause");
            // }
        }
    }, 1000);
}

function stop() {
    location.reload();
}

let form1 = document.getElementById('tmpstravail').value;
let form2 = document.getElementById('tmpspause').value;

//recharge la page : location.reload();
//https://www.commentcoder.com/timer-javascript/