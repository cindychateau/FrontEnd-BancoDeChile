console.log("¡Entramos a la página!")

function alerta() {
    alert("Hiciste click");
    console.log("Hizo click en el Sign Out");
}

function cambiar_texto(elemento) {
    //console.log(elemento);
    //innerText -> El texto interno lo cambia
    elemento.innerText = "Otro texto";
}

function cambio_education(elemento_h3) {
    //innerHTML -> Me permite agregar etiquetas al elemento
    elemento_h3.innerHTML = "Cambio de H3 <span>Etiqueta span</span>";
}

function cambia_imagen(elemento_img) {
    elemento_img.src = "images/todd-s.jpg";
}

function regresa_imagen(elemento_img) {
    elemento_img.src = "images/jane-m.jpg";
}

function eliminar(elemento) {
    elemento.remove();
}

var clicks_profile = 0;
function aumentar_clicks() {
    clicks_profile++;
    alert(`Haz hecho clic: ${clicks_profile} veces`);

    alert("Haz hecho click "+clicks_profile);
}