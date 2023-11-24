
var typed = new Typed('#titulo', {
    strings: ['How can we help?', 'Im here to help you', 'Te ayudamos'],
    typeSpeed: 50,
});

AOS.init();


function mostrarModal() {
    //Seleccionamos input
    let input = document.querySelector('input');

    document.querySelector('.modal-body p').innerHTML = `Estás buscando: ${input.value}`;

    //Despliega modal
    document.querySelector('.modal').classList.remove('display-none');

    //Capa atenuante
    document.querySelector('body').classList.add('modal-on');
}

function cerrarModal() {
    document.querySelector('.modal').classList.add('display-none');

    document.querySelector('body').classList.remove('modal-on');
}