var me_gusta = 0;

function dar_like() {
    me_gusta++;
    var abc1 = document.querySelector(".cantidad"); //cantidad = <span class="cantidad">3</span>
    abc1.innerText = me_gusta;
}