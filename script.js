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
var slideIndex = [1,1,1,1,1];
var myTimer=[];
for(let i=0;i<slideshowContainers.length;i++){
    var slides = slideshowContainers[i].querySelectorAll('.photo');
    showSlides(slides,i);
    plusSlide(1,i);
}

function showSlides(slides,index){
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    if (slideIndex[index] > slides.length) {slideIndex[index] = 1} ;
    if (slideIndex[index] < 1) {slideIndex[index] = slides.length};
    slides[slideIndex[index]-1].style.display = "block";  
}

function plusSlide(n, index){
    clearTimeout(myTimer[index]);
    var slides = slideshowContainers[index].querySelectorAll('.photo');
    if(n<0){
        slideIndex[index]-=1;
    }else{
        slideIndex[index]+=1;
    }
    showSlides(slides,index);
    myTimer[index] = setTimeout(function(){plusSlide(slides,index)},3000);
}
