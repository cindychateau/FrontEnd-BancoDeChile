/*
Función: Bloque de código al que nombramos y al que podemos llamar (las veces que yo necesite)
*/
//function nombre_funcion(parametro1, parametro2...){}
function saludo() {
    console.log("Hola");
    console.log("¿Cómo estás?");
}

saludo();
saludo();
saludo();
saludo();
saludo();

//nombre = "Juana"
function saludo_nombre(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

saludo_nombre("Elena");
saludo_nombre("Juana");

//nombre = "Elena", apellido = "De Troya"
function saludo_nombre_apellido(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo_nombre_apellido("Elena", "De Troya");

//num1 = 11, num2 = 20
//<- 11+20 = 31
function sumatoria(num1, num2) {
    return num1 + num2;
}

var resultado = sumatoria(11, 20); //31
console.log(`El resultado es: ${resultado}`);