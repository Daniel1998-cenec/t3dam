let jugadorActual = 'X';
let tablero = ['','','','','','','','',''];

// Función para cambiar el fondo al entrar del div
function entrar(id) {
    let elem = document.getElementById(id)
    elem.style.background = "orange";
}

// Función para cambiar el fondo al salir del div
function salir(id) {
    let elem = document.getElementById(id);
    elem.style.background = "white";
}

function marcar(id) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<p style='color:blue;'><b>" + jugadorActual + "</b></p>";
    tablero[id] = jugadorActual;
   
    if (verificarGanador()) {
        alert(`¡Felicidades! El jugador con ${jugadorActual} ha ganado.`);
        return;
    }

    jugadorActual = jugadorActual == 'X' ? '0' : 'X';
}

// Paso 2: Función de verificación de combinación ganadora
function verificarGanador() {
    
    const combinacionesGanadoras = [['c1', 'c2', 'c3'],
    ['c4', 'c5', 'c6'],
    ['c7', 'c8', 'c9'],
    ['c1', 'c4', 'c7'],
    ['c2', 'c5', 'c8'],
    ['c3', 'c6', 'c9'],
    ['c1', 'c5', 'c9'],
    ['c3', 'c5', 'c7']
    ];

    // Verificar si alguna combinación ganadora se ha completado
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];
        if (tablero[a] == tablero[b] && tablero[b] == tablero[c] && tablero[a] != '') {
            return tablero[a];
        }
    }
    return null;
}