function añadirClase(id, clase) {
    var objeto = document.getElementById(id);
    objeto.classList.add(clase);
}

function sacarClase(id, clase) {
    var objeto = document.getElementById(id);
    objeto.classList.remove(clase);
}

function print(text) {
    console.log(text);
}

function campoObligatorio(id) {
    var texto = document.getElementById(id).value;
    if(texto == ""){
        añadirClase(id, "bg-rojo");
    } else {
        sacarClase(id, "bg-rojo");
    }
}