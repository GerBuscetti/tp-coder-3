const form = document.getElementById('form');
const prodname = document.getElementById('productname');
const prodprice = document.getElementById('productprice');
const prodcondition = document.getElementById('productcondition');
const prodtype = document.getElementById('productclothtype');
const proddescription = document.getElementById('productdescription');

function validarNombreProducto(){
    var nombre = prodname.value;
    if (nombre === '') {
        document.getElementById("errorproductname").innerHTML = "No has introducido un nombre";
        añadirClase("productname", "error-box");
        sacarClase("productname", "sucess-box");
    } else {
        document.getElementById("errorproductname").innerHTML = "";
        sacarClase("productname", "error-box");
        añadirClase("productname", "sucess-box");
    }
}

function validarPrecio(){
    var precio = prodprice.value;
    if (precio === '') {
        document.getElementById("errorproductprice").innerHTML = "No has introducido un precio";
        añadirClase("productprice", "error-box");
        sacarClase("productprice", "sucess-box");
    } else {
        document.getElementById("errorproductprice").innerHTML = "";
        sacarClase("productprice", "error-box");
        añadirClase("productprice", "sucess-box");
    }
}

function validarCondicion(){
    var condicion = prodcondition.value;
    if (condicion === '') {
        document.getElementById("errorproductcondition").innerHTML = "No has introducido la condicion";
        añadirClase("productcondition", "error-box");
        sacarClase("productocondition", "sucess-box");
    } else {
        document.getElementById("errorproductcondition").innerHTML = "";
        sacarClase("productcondition", "error-box");
        añadirClase("productcondition", "sucess-box");
    }
}

function validarTipoDeProducto(){
    var tipo = prodtype.value;
    if (tipo === '') {
        document.getElementById("errorproductclothtype").innerHTML ="No has introducido el tipo de producto";
        añadirClase("productclothtype", "error-box");
        sacarClase("productclothtype", "sucess-box");
    } else {
        document.getElementById("errorproductclothtype").innerHTML = "";
        sacarClase("productclothtype", "error-box");
        añadirClase("productclothtype", "sucess-box");
    }
}

function validarDescripcion(){
    var descripcion = proddescription.value;
    if (descripcion === '') {
        document.getElementById("errorproductdescription").innerHTML = "No ha introducido una descripcion";
        añadirClase("productdescription", "error-box");
        sacarClase("productdescription", "sucess-box");
    } else if (descripcion.length < 100) {
        document.getElementById("errorproductdescription").innerHTML = "La descripcion debe tener mas de 100 caracteres";
        añadirClase("productdescription", "error-box");
        sacarClase("productdescription", "sucess-box");
    } else {
        document.getElementById("errorproductdescription").innerHTML = "";
        sacarClase("productdescription", "error-box");
        añadirClase("productdescription", "sucess-box");
    }

}

function validarFormulario(){
    var nombre = prodname.value;
    var precio = prodprice.value;
    var condicion = prodcondition.value;
    var tipo = prodtype.value;
    var descripcion = proddescription.value;

    /* validacion nombre */
    if (nombre === '') {
        var condicion1 = false;
    } else {
        var condicion1 = true;
    }

    /* validacion precio */
    if (precio === '') {
        var condicion2 = false;
    } else {
        var condicion2 = true;
    }

    /* validacion condicion */
    if (condicion === '') {
        var condicion3 = false;
    } else {
        var condicion3 = true;
    }

    /* validacion tipo de producto */
    if (tipo === '') {
        var condicion4 = false;
    } else {
        var condicion4 = true;
    }

    /* validacion descripcion */
    if (descripcion === '') {
        var condicion5 = false;
    } else if (descripcion.length < 100) {
        var condicion5 = false;
    } else {
        var condicion5 = true;
    }

    /* validacion de las condiciones previamente mencionadas */
    if (condicion1 === false || condicion2 === false || condicion3 === false || condicion4 === false || condicion5 === false){
        event.preventDefault();
        alert("No se pudo realizar la compra debido a datos incorrectos y/o incompletos");
    }
}