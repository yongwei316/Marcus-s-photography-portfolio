/*var slideIndex = 1;
var myTimer;

window.addEventListener("load",function() {
    showSlide(slideIndex);
    myTimer = setInterval(function(){plusSlide(1)}, 4000);
})

function plusSlide(n){
    clearInterval(myTimer);
    if(n<0){
        showSlide(slideIndex-=1);
    }else{
        showSlide(slideIndex+=1);
    }
    if (n === -1){
        myTimer = setInterval(function(){plusSlide(n + 2);}, 4000);
      } else {
        myTimer = setInterval(function(){plusSlide(n + 1);}, 4000);
      }
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("photo");
    for(i=0;i<slides.length;i++){
        slides[i].style.display ="none";
    }
    if (n > slides.length) {slideIndex = 1} ;
    if (n < 1) {slideIndex = slides.length};
    slides[slideIndex-1].style.display = "block";  
}*/

var slideshowContainers = document.getElementsByClassName("photo-container");
for(let i=0;i<slideshowContainers.length;i++){
    var slides = slideshowContainers[i].querySelectorAll('.photo');
    var slideIndex = 1;
    showSlides(slides,slideIndex)
}

function showSlides(slides,slideIndex){
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} ;
    if (slideIndex < 1) {slideIndex = slides.length};
    slides[slideIndex-1].style.display = "block";  
}

/*trying github*/