function aleatorio(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            function eleccion(jugada) {
                let resultado = "";
                if (jugada == 1) {
                    resultado = "Piedra ✊";
                } else if (jugada == 2) {
                    resultado = "Papel 📄";
                } else if (jugada == 3) {
                    resultado = "Tijeras ✂️";
                } else {
                    resultado = "MAL ELEGIDO 😢";
                }
                return resultado;
            }

            function jugar() {
                let jugador = 0;
                let pc = 0;
                let triunfos = 0;
                let perdidas = 0;

                while (triunfos < 3 && perdidas < 3) {
                    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
                    if (jugador === null) {
                        alert("Juego cancelado.");
                        break;
                    }
                    jugador = parseInt(jugador);
                    if (isNaN(jugador) || jugador < 1 || jugador > 3) {
                        alert("Entrada inválida. Por favor, elige 1, 2 o 3.");
                        continue;
                    }
                    pc = aleatorio(1, 3);
                    alert("PC elige: " + eleccion(pc));
                    alert("Tú elegiste: " + eleccion(jugador));
                    if (pc == jugador) {
                        alert("EMPATE 😔");
                    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
                        alert("GANASTE 🎉");
                        triunfos++;
                    } else {
                        alert("PERDISTE 😭");
                        perdidas++;
                    }
                }
                if (triunfos >= 3) {
                    alert("¡Ganaste el juego! Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
                } else if (perdidas >= 3) {
                    alert("Perdiste el juego. Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
                }
            }

            window.onload = jugar;