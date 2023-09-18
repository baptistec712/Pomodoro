let departMinutes = 25;
        let temps = departMinutes * 60;
        let timerInterval; // Cette variable stockera l'ID de l'intervalle

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

                if (temps === 0) {
                    // Arrêter l'intervalle lorsque le temps est écoulé
                    clearInterval(timerInterval);
                }
            }, 1000);
          }




  //https://www.commentcoder.com/timer-javascript/