// Slide multiple
// var slideIndex = [1,9];
// var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   slidesPresentation(slideIndex[no] += n, no);
// }

// function slidesPresentation(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }

// Slide single


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(index) {
  showSlides(slideIndex += index);
}

// Thumbnail image controls
function currentSlide(index) {
  showSlides(slideIndex = index);
}

function showSlides(index) {
  var number;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (number = 0; number < slides.length; number++) {
      slides[number].style.display = "none";
  }
  for (number = 0; number < dots.length; number++) {
      dots[number].className = dots[number].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}