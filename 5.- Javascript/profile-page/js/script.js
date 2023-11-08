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

function editar_perfil() {
    //document.getElementById("nombre");
    var elemento_nombre = document.querySelector("#nombre"); //elemento_nombre = <h1 id="nombre">Jane Doe</h1>

    //Obtener el elemento
    var input = document.getElementById("input_nombre"); //document.querySelector("#input_nombre")
    var valor_de_input = input.value;
    if(valor_de_input == "") {
        elemento_nombre.innerText = "Elena de Troya";
    } else {
        elemento_nombre.innerText = valor_de_input;
        //input.remove();
    }

    document.querySelector(".locacion").innerHTML = '<img src="icons/map-marker.png" alt="pin" class="icon-s"> Troya';   

    //Query selector SOLO funciona con 1 elemento.
    var elemento_p = document.querySelector(".card-body p"); // elemento_p = <p>Developer | Engineer | Problem Solver<br>Master of shadows and the Internet!</p>
    elemento_p.innerHTML = "Desarrolladora, Ingeniera <br> Reina emperatriz de Troya";

    elemento_nombre.style.color = "white";
    //background-color -> backgroundColor
    //margin-left -> marginLeft
    elemento_nombre.style.backgroundColor = "blue";
    //text-shadow -> textShadow
    elemento_nombre.style.textShadow = "2px 2px 2px black";

    //classList -> arreglo
    //Pregunto si existe la clase en el elemento
    if(elemento_p.classList.contains("parrafo_darkmode")) {
        //Quitamos la clase
        elemento_p.classList.remove("parrafo_darkmode")
    } else {
        //Agregamos clase
        elemento_p.classList.add("parrafo_darkmode");
    }

    
}