const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const producthome = document.getElementsByClassName("photoproduct");
const imagen = document.getElementById('imagenhome');
const boton = document.getElementById('buynowbutton');


menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


const remeras = [
  "img/imgropa/remeras/remera1.jpg",
  "img/imgropa/remeras/remera2.jpg",
  "img/imgropa/remeras/remera3.jpg",
  "img/imgropa/remeras/remera4.jpg",
  "img/imgropa/remeras/remera5.jpg",
  "img/imgropa/remeras/remera6.jpg",
  "img/imgropa/remeras/remera7.jpg",
  "img/imgropa/remeras/remera8.jpg",
  "img/imgropa/remeras/remera9.jpg",
  "img/imgropa/remeras/remera10.jpg",
  "img/imgropa/remeras/remera11.jpg",
  "img/imgropa/remeras/remera12.jpg",
  "img/imgropa/remeras/remera13.jpg",
  "img/imgropa/remeras/remera14.jpg",
  "img/imgropa/remeras/remera15.jpg",
]
const zapatillas = [
    "img/imgropa/zapatillas/zapatilla1.jpg",
    "img/imgropa/zapatillas/zapatilla2.jpg",
    "img/imgropa/zapatillas/zapatilla3.jpg",
    "img/imgropa/zapatillas/zapatilla4.jpg",
    "img/imgropa/zapatillas/zapatilla5.jpg",
    "img/imgropa/zapatillas/zapatilla6.jpg",
    "img/imgropa/zapatillas/zapatilla7.jpg",
    "img/imgropa/zapatillas/zapatilla8.jpg",
    "img/imgropa/zapatillas/zapatilla9.jpg",
    "img/imgropa/zapatillas/zapatilla10.jpg",
    "img/imgropa/zapatillas/zapatilla11.jpg",
    "img/imgropa/zapatillas/zapatilla12.jpg",
    "img/imgropa/zapatillas/zapatilla13.jpg",
    "img/imgropa/zapatillas/zapatilla14.jpg",
    "img/imgropa/zapatillas/zapatilla15.jpg",
  ]
  const pantalones = [
    "img/imgropa/pantalones/pantalon1.jpg",
    "img/imgropa/pantalones/pantalon2.jpg",
    "img/imgropa/pantalones/pantalon3.jpg",
    "img/imgropa/pantalones/pantalon4.jpg",
    "img/imgropa/pantalones/pantalon5.jpg",
    "img/imgropa/pantalones/pantalon6.jpg",
    "img/imgropa/pantalones/pantalon7.jpg",
    "img/imgropa/pantalones/pantalon8.jpg",
    "img/imgropa/pantalones/pantalon9.jpg",
    "img/imgropa/pantalones/pantalon10.jpg",
    "img/imgropa/pantalones/pantalon11.jpg",
    "img/imgropa/pantalones/pantalon12.jpg",
    "img/imgropa/pantalones/pantalon13.jpg",
    "img/imgropa/pantalones/pantalon14.jpg",
    "img/imgropa/pantalones/pantalon15.jpg",
  ]

function mostrar_remeras() {
  
  for (var i = 0; i < producthome.length; i++) {

    var productdata = producthome[i].parentNode.querySelector('p');

    producthome[i].src = remeras[i]; 
    productdata.textContent = "Remera";
  }
}
function mostrar_pantalones() {

    for (var i = 0; i < producthome.length; i++) {

        var productdata = producthome[i].parentNode.querySelector('p');
    
        producthome[i].src = pantalones[i]; 
        productdata.textContent = "Pantalon";
      }
}
function mostrar_zapatillas() {
  
    for (var i = 0; i < producthome.length; i++) {

        var productdata = producthome[i].parentNode.querySelector('p');
    
        producthome[i].src = zapatillas[i]; 
        productdata.textContent = "Zapatilla";
      }
}
function ir_home() {
  window.location.href = "home.html";
}

function mostrar_ropa() {

    imagen.style.display = 'none';
    boton.style.display = 'none';

}

function ver_producto() {
  window.location.href = "product_page.html";

}
