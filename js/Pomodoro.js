let departMinutes = 0.1;
let temps = departMinutes * 60;
let timerInterval; // Cette variable stockera l'ID de l'intervalle
let boucle = 0;

const timerElement = document.getElementById("timer");

function start() {
    // Si un intervalle précédent est en cours, on le supprime
    clearInterval(timerInterval);

    // Réinitialise le temps à sa valeur initiale
    temps = departMinutes * 60;

    timerInterval = setInterval(() => {
        let minutes = parseInt(temps / 60, 10);
        let secondes = parseInt(temps % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;

        timerElement.innerText = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps - 1;
        console.log(boucle);
        if (temps === 0 && boucle < 1) {
            clearInterval(timerInterval);
            departMinutes = 0.1;
            temps = departMinutes * 60;
            const timerElement = document.getElementById("timer");
            boucle++;
            start();
        }
    }, 1000);
}



//recharge la page : location.reload();
//https://www.commentcoder.com/timer-javascript/