const form = document.getElementById('form');
const names = document.getElementById('names');
const surname = document.getElementById('surname');
const username = document.getElementById('userid');
const usermail = document.getElementById('usermail');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const PASSCHECK = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    /*  Contraseña entre 8 y 15 caracteres que contengan al menos una letra minúscula,
        una letra mayúscula, un dígito numérico y un carácter especial 
        https://w3resource.com/javascript/form/password-validation.php#:~:text=To%20check%20a%20password%20between%207%20to%2016,character%20%28alphanumeric%29%20including%20the%20underscore%20%28equivalent%20to%20%5BA-Za-z0-9_%5D%29.*/
const MAILCHECK = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*  https://regexpattern.com/email-address/ */

function validarNombre() { /* validacion visual*/
    var nombre = names.value;
    if(nombre === '') {
        document.getElementById("errorname").innerHTML = "No has indicado un nombre/s";
        añadirClase("names", "error-box");
        sacarClase("names", "sucess-box");
    } else {
        sacarClase("names", "error-box");
        añadirClase("names", "sucess-box");
        document.getElementById("errorname").innerHTML = "";
    }
}

function validarApellido() { /* validacion visual*/
    var apellido = surname.value;
    if(apellido === '') {
        document.getElementById("errorsurname").innerHTML = "No has indicado un apellido/s";
        añadirClase("surname", "error-box");
        sacarClase("surname", "sucess-box");
    } else {
        sacarClase("surname", "error-box");
        añadirClase("surname", "sucess-box");
        document.getElementById("errorsurname").innerHTML = "";
    }
}

function validarUsuario() { /* validacion visual*/
    var usuario = username.value;
    if(usuario === '') {
        document.getElementById("erroruser").innerHTML = "No has indicado un usuario";
        añadirClase("userid", "error-box");
        sacarClase("userid", "sucess-box");
    } else if(usuario.length < 5){
        document.getElementById("erroruser").innerHTML = "Ingrese un nombre de usuario valido";
        añadirClase("userid", "error-box");
        sacarClase("userid", "sucess-box");
    } else {
        sacarClase("userid", "error-box");
        añadirClase("userid", "sucess-box");
        document.getElementById("erroruser").innerHTML = "";
    }
}

function validarMail() { /* validacion visual*/
    var mail = usermail.value;
    var mailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail === '') {
        document.getElementById("errormail").innerHTML = "No has indicado un mail";
        añadirClase("usermail", "error-box");
        sacarClase("usermail", "sucess-box");
    } else if(!mailcheck.test(mail)){
        document.getElementById("errormail").innerHTML = "Ingresa un mail valido";
        añadirClase("usermail", "error-box");
        sacarClase("usermail", "sucess-box");
    } else {
        sacarClase("usermail", "error-box");
        añadirClase("usermail", "sucess-box");
        document.getElementById("errormail").innerHTML = "";
    }
}

function validarContraseña() { /* validacion visual*/
    var contraseña = password.value;
    var passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(contraseña === '') {
        document.getElementById("errorpassword").innerHTML = "No has introducido una contraseña";
        añadirClase("password", "error-box");
        sacarClase("password", "sucess-box");
    } else if(!passcheck.test(contraseña)) {
        document.getElementById("errorpassword").innerHTML = "Contraseña entre 8 y 15 caracteres que contengan al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial";
        añadirClase("password", "error-box");
        sacarClase("password", "sucess-box");
    } else {
        sacarClase("password", "error-box");
        añadirClase("password", "sucess-box");
        document.getElementById("errorpassword").innerHTML ="";
    }
}

function validarReContraseña() { /* validacion visual*/
    var cont = password.value;
    var recont = repassword.value;
    if (recont != cont) {
        document.getElementById("errorrepassword").innerHTML = "Las contraseñas no coinciden";
        añadirClase("repassword", "error-box");
        sacarClase("repassword", "sucess-box");
    } else {
        sacarClase("repassword", "error-box");
        añadirClase("repassword", "sucess-box");
        document.getElementById("errorrepassword").innerHTML = "";
    }
}

function validarFormulario() {
    var nombre = names.value;
    var apellido = surname.value;
    var usuario = username.value;
    var mail = usermail.value;
    var mailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var contraseña = password.value;
    var passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var recontraseña = repassword.value;

    /* validacion nombre */
    if (nombre === ''){
        var condicion1 = false;
    } else {
        var condicion1 = true;
    }

    /* validacion apellido */
    if (apellido === ''){
        var condicion2 = false;
    } else {
        var condicion2 = true;
    }

    /* validacion usuario */
    if (usuario.length < 5) {
        var condicion3 = false;
    } else {
        var condicion3 = true;
    }

    /* validacion mail */
    if (!mailcheck.test(mail)) {
        var condicion4 = false;
    } else {
        var condicion4 = true;
    }

    /* validacion contraseña */
    if (!passcheck.test(contraseña)){
        var condicion5 = false;
    } else {
        var condicion5 = true;
    }

    /* validacion repetir contraseña */
    if (recontraseña != contraseña || recontraseña==='') {
        var condicion6 = false;
    } else {
        var condicion6 = true;
    }

    /* validacion de las condiciones previamente mencionadas */
    if (condicion1===false && condicion2===false && condicion3===false && condicion4===false && condicion5===false && condicion6===false){
        event.preventDefault();
        alert("No se pudo generar una cuenta debido a datos incorrectos y/o incompletos");
    }
}