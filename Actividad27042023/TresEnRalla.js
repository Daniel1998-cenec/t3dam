// Función para cambiar el fondo al entrar del div
function entrar(id) {
    let elem=document.getElementById(id)
    elem.style.background="orange";
}

// Función para cambiar el fondo al salir del div
function salir(id) {
    let elem=document.getElementById(id);
    elem.style.background="white";
}

function asterisco(id) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<p style='color:blue;'><b>*</b></p>";
}

function cero(id) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<p style='color:red;'><b>0</b></p>";
}