let currentSlide = 0;
showSlide(currentSlide);

setInterval(nextSlide, 3000);

function showSlide(n) {
    currentSlide = n;
    let slides = document.getElementsByClassName('slides'); // Lista con todos los elementos que tienen la clase slides
    
    for(let i=0; i<slides.length; i++) {
        slides[i].classList.add("display-none");
    }

    slides[n].classList.remove("display-none");

    let dots = document.getElementsByClassName('dot');

    for(let i=0; i<dots.length; i++){
        dots[i].classList.remove('active');
    }

    dots[n].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    let tamano_slides = document.getElementsByClassName('slides').length;
    if(currentSlide === tamano_slides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    let tamano_slides = document.getElementsByClassName('slides').length;
    if(currentSlide < 0) {
        currentSlide = tamano_slides -1;
    }
    showSlide(currentSlide);
}

function despliegaImagen(imagen) {
    document.querySelector('.container-img').innerHTML = `<img src=${imagen.src}>`;

    document.querySelector('.target').classList.remove('display-none');
    
    document.querySelector('body').classList.add('modal-on');

}