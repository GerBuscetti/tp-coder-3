const form = document.getElementById('form');
const address = document.getElementById('useraddress');
const cardnumber = document.getElementById('usercardnum');
const cardcode = document.getElementById('usercardcode');
const month = document.getElementById('usercardmonth');
const year = document.getElementById('usercardyear');
const cardname = document.getElementById('usercardname');
const DNI = document.getElementById('userdni');

/*FALTA VALIDACION POR TARJETA (UNA TARJETA DE CREDITO DE 15 NUMEROS SIEMPRE TIENE UN CODIGO DE SEGURIDAD DE 4 NUMEROS, MIENTRAS QUE UNA TARJETA DE CREDITO DE 16 NUMEROS SIEMPRE TIENE UN CODIGO DE SEGURIDAD DE 3 NUMEROS) */

function validarDireccion(){
    var direccion = address.value;
    if (direccion === '') {
        document.getElementById("erroraddress").innerHTML = "No has indicado una direccion";
        añadirClase("useraddress", "error-box");
        sacarClase("useraddress", "sucess-box");
    } else {
        sacarClase("useraddress", "error-box");
        añadirClase("useraddress", "sucess-box");
        document.getElementById("erroraddress").innerHTML = "";
    }
}

function validarNumTarj(){
    var numtarj = cardnumber.value;
    if(numtarj === '') {
        document.getElementById("errorcardnum").innerHTML = "No has indicado un numero de tarjeta";
        añadirClase("usercardnum", "error-box");
        sacarClase("usercardnum", "sucess-box");
    } else if(numtarj.length === 15 || numtarj.length === 16){
        sacarClase("usercardnum", "error-box");
        añadirClase("usercardnum", "sucess-box");
        document.getElementById("errorcardnum").innerHTML = "";
    } else{ 
        document.getElementById("errorcardnum").innerHTML = "Indique un numero de tarjeta valido";
        añadirClase("usercardnum", "error-box");
        sacarClase("usercardnum", "sucess-box");
    }
}

function validarCodTarj(){
    var codtarj = cardcode.value;
    if (codtarj === ''){
        document.getElementById("errorcardcode").innerHTML = "No has indicado un codigo de seguridad";
        añadirClase("usercardcode", "error-box");
        sacarClase("usercardcode", "sucess-box");
    } else if(codtarj.length === 3 || codtarj.length === 4) {
        sacarClase("usercardcode", "error-box");
        añadirClase("usercardcode", "sucess-box");
        document.getElementById("errorcardcode").innerHTML = "";
    } else{
        document.getElementById("errorcardcode").innerHTML = "Indique un codigo de seguridad valido";
        añadirClase("usercardcode", "error-box");
        sacarClase("usercardcode", "sucess-box");
    }
}

function validarFecha(){
    var mes = month.value;
    var año = year.value;
    var mesint = parseInt(mes);
    if (mes === '' && año === ''){
        document.getElementById("errordate").innerHTML = "No has indicado una fecha";
        añadirClase("usercardmonth", "error-box");
        añadirClase("usercardyear", "error-box");
        sacarClase("usercardmonth", "sucess-box");
        sacarClase("usercardyear", "sucess-box");
    } else if (mes === '' || año === ''){
        document.getElementById("errordate").innerHTML = "Indique una fecha valida";
        añadirClase("usercardmonth", "error-box");
        añadirClase("usercardyear", "error-box");
        sacarClase("usercardmonth", "sucess-box");
        sacarClase("usercardyear", "sucess-box");
    } else if (mesint < 10 && año === "2023"){
        document.getElementById("errordate").innerHTML = "Indique una fecha valida";
        añadirClase("usercardmonth", "error-box");
        añadirClase("usercardyear", "error-box");
        sacarClase("usercardmonth", "sucess-box");
        sacarClase("usercardyear", "sucess-box");
    } else{
        document.getElementById("errordate").innerHTML = "";
        sacarClase("usercardmonth", "error-box");
        sacarClase("usercardyear", "error-box");
        añadirClase("usercardmonth", "sucess-box");
        añadirClase("usercardyear", "sucess-box");
    }
}

function validarNombre(){
    var nombre = cardname.value;
    if (nombre === ''){
        document.getElementById("errorcardname").innerHTML = "No has indicado un nombre";
        añadirClase("usercardname", "error-box");
        sacarClase("usercardname", "sucess-box");
    } else {
        añadirClase("usercardname", "sucess-box");
        sacarClase("usercardname", "error-box");
        document.getElementById("errorcardname").innerHTML = "";
    }
}

function validarDNI(){
    var dni = DNI.value;
    if (dni.length === 7 || dni.length === 8) {
        document.getElementById("errordni").innerHTML = "";
        añadirClase("userdni", "sucess-box");
        sacarClase("userdni", "error-box");
    } else if (dni === '') {
        document.getElementById("errordni").innerHTML = "No has ingresado un DNI";
        añadirClase("userdni", "error-box");
        sacarClase("userdni", "sucess-box");
    } else {
        document.getElementById("errordni").innerHTML = "Ingrese un DNI valido";
        añadirClase("userdni", "error-box");
        sacarClase("userdni", "sucess-box");
    }
}

function validarFormulario(){
    var direccion = address.value;
    var numtarj = cardnumber.value;
    var codtarj = cardcode.value;
    var mes = month.value;
    var año = year.value;
    var mesint = parseInt(mes);
    var nombre = cardname.value;
    var dni = DNI.value;

    /* validacion direccion */
    if (direccion === '') {
        var condicion1 = false;
    } else {
        var condicion1 = true;
    }

    /* validacion numero tarjeta */
    if(numtarj === '') {
        var condicion2 = false;
    } else if(numtarj.length === 15 || numtarj.length === 16){
        var condicion2 = true;
    } else{ 
        var condicion2 = false;
    }

    /* validacion codigo tarjeta */
    if (codtarj === ''){
        var condicion3 = false;
    } else if(codtarj.length === 3 || codtarj.length === 4) {
        var condicion3 = true;
    } else{
        var condicion3 = false;
    }

    /* validacion fecha */
    if (mes === '' && año === ''){
        var condicion4 = false;
    } else if (mes === '' || año === ''){
        document.getElementById("errordate").innerHTML = "Indique una fecha valida";
        var condicion4 = false;
    } else if (mesint < 10 && año === "2023"){
        var condicion4 = false;
    } else{
        document.getElementById("errordate").innerHTML = "";
        var condicion4 = true;
    }

    /* validacion nombre */
    if (nombre === ''){
        var condicion5 = false;
    } else {
        var condicion5 = true;
    }

    /* validacion dni */
    if (dni.length === 7 || dni.length === 8) {
        var condicion6 = true;
    } else if (dni === '') {
        var condicion6 = false;
    } else {
        var condicion6 = false;
    }

    /* validacion de las condiciones previamente mencionadas */
    if (condicion1 === false || condicion2 === false || condicion3 === false || condicion4 === false || condicion5 === false || condicion6 === false){
        event.preventDefault();
        alert("No se pudo realizar la compra debido a datos incorrectos y/o incompletos");
    }
}