// Sigma -  Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.







//Sigma pares e impares - Escribe código que sume los valores pares del 1 al 100 en una variable suma_pares y valores impares en una variable suma_impares. Intenta hacer UN solo bucle. % -> mod. 5%2 

/*Crea un función que reciba dos arreglos del mismo tamaño y regrese un arreglo con sus sumas
EJ:
arr1 = [1, 2, 3, 4]
arr2 = [1, 2, 3, 4]
return [2, 4, 6, 8]
*/
function suma_arreglos(arr1, arr2) {
    //Pregunto si son del mismo tamaño
    if(arr1.length !== arr2.length) {
        return "No son del mismo tamaño";
    }
    var suma = [];
    for(let i=0; i<arr1.length; i++) {
        suma.push(arr1[i] + arr2[i]);
    }

    return suma;
}

console.log(suma_arreglos([1, 2, 3, 4], [1, 2, 3, 4]));

/*
Crea una función que reciba un número y regrese un arreglo con los números de fibonacci hasta esa posición
EJ:
num = 6
return = [0, 1, 1, 2, 3, 5]

Serie de fibonacci:
0, 1, 1, 2, 3, 5, 8...
*/
function fibonacci(num) {
    var arr = [0, 1];
    for(let i=2; i<num; i++) {
        var nuevo_num = arr[i-2] + arr[i-1];
        arr.push(nuevo_num);
    }

    return arr;
}

console.log(fibonacci(10));