/**
 * Function that stores the inserted name.
 */
function storeName() {
    var name = document.getElementById('userImput').value;
    sessionStorage.setItem('usuario', name);
}

/**
 * Function that changes the inserted name.
 */
function changeName() {
    var name = document.getElementById('userImput').value;
    if (!name) {
        document.getElementById('usuarionombre').textContent = "Not Logged in";
    } else {
        document.getElementById('usuarionombre').textContent = name;
    }
    storeName();
}


window.addEventListener('load', function () {
    // User name
        let name = sessionStorage.getItem('usuario');
        if (name) {
            document.getElementById('usuarionombre').textContent = name;
        } else {
            document.getElementById('usuarionombre').textContent = "Not Logged in";
        }
});
