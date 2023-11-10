var likes = [0, 0, 0];

/*indice = 1
likes[1]++ -> 4
.cantidad1 -> <span class="cantidad0">4</span>
*/
function dar_like(indice) {
    likes[indice]++; //Solo cambia el valor del indice indicado
    document.querySelector(".cantidad"+indice).innerText = likes[indice];
}