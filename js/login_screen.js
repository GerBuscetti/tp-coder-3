const form = document.getElementById('form');
const username = document.getElementById('userid');
const password = document.getElementById('userpassword');
const PASSCHECK = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    /*  Contraseña entre 8 y 15 caracteres que contengan al menos una letra minúscula,
        una letra mayúscula, un dígito numérico y un carácter especial */

function validarUsuario() { /* aspecto visual de la validacion */
    var usuario = username.value;
    if(usuario === '') {
        document.getElementById("erroruser").innerHTML = "No has indicado un usuario";
        añadirClase("userid", "error-box");
        sacarClase("userid", "sucess-box");
    } else if(usuario.length < 5){
        document.getElementById("erroruser").innerHTML = "Ingrese un nombre de usuario valido";
        añadirClase("userid", "error-box");
        sacarClase("userid", "sucess-box");
    }
    else {
        sacarClase("userid", "error");
        añadirClase("userid", "sucess-box");
        document.getElementById("erroruser").innerHTML = "";
    }
}

function validarcontraseña(){ /* aspecto visual de la validacion */
    var contraseña = password.value;
    var passcheck = PASSCHECK;
    if(contraseña === '') {
        document.getElementById("errorpassword").innerHTML = "No has introducido una contraseña";
        añadirClase("userpassword", "error-box");
        sacarClase("userpassword", "sucess-box");
    } else if(!passcheck.test(contraseña)) {
        document.getElementById("errorpassword").innerHTML = "Ingrese una contraseña valida";
        añadirClase("userpassword", "error-box");
        sacarClase("userpassword", "sucess-box");
    }
    else {
        sacarClase("userpassword", "error-box");
        añadirClase("userpassword", "sucess-box");
        document.getElementById("errorpassword").innerHTML ="";
    }
}

function validarFormulario(){
    var contraseña = password.value;
    var usuario = username.value;
    var passcheck = PASSCHECK;

    /* validacion contraseña */
    if(!passcheck.test(contraseña)) {
        var condicion1 = false;
    } else{
        var condicion1 = true;
    } 

    /* validacion usuario */
    if (usuario === '') {
        var condicion2 = false;
    } else{
        var condicion2 = true;
    }

    /* validacion de las condiciones previamente mencionadas */
    if (condicion1 === false || condicion2===false){
        event.preventDefault();
        alert("No se pudo iniciar sesion debido a datos incorrectos y/o incompletos")
    }
}