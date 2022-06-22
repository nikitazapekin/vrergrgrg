let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex +=1);
}
setInterval(nextSlide, 10000);
function previousSlide(){
    showSlides(slideIndex -=1);
}
function currentSlide() {
    showSlides( slideIndex=n);
} setInterval(currentSlide, 10000);
function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length //это чтобы назад шагать
    }
    for (let slide of slides) {  //соединение всех фото в одно
        slide.style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    }
}
setInterval(showSlides, 10000);


