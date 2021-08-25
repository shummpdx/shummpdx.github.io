function openModal() {
    document.getElementById("simpleModal").style.display = "block";
}

function closeModal() {
    document.getElementById("simpleModal").style.display = "none";
}


var slideIndex = -1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


function openCtfModal() {
    document.getElementById("ctfModal").style.display = "block";
}

function closeCtfModal() {
    document.getElementById("ctfModal").style.display = "none";
}

var CtfSlideIndex = -1;
showCtfSlides(CtfSlideIndex);

function plusCtfSlides(n) {
    showCtfSlides(CtfSlideIndex += n);
}

function currentCtfSlide(n){
    showCtfSlides(CtfSlideIndex = n);
}

function showCtfSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myCtfSlides");
    var dots = document.getElementsByClassName("demo1");
    if (n > slides.length) {
        CtfSlideIndex = 1;
    }
    if (n < 1) {
        CtfSlideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[CtfSlideIndex-1].style.display = "block";
    dots[CtfSlideIndex-1].className += " active";
}


function validateForm() {
    let x = document.forms["form"].value;
    if (x == "") {
        alert("Error");
        return false;
    }
}