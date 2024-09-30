
let  index = 0;
const slides = document.querySelectorAll('.learnhero');

function showSlide(index){
slides.forEach((slide, i) => {
  slide.classList.remove('active');
  if(i === index){
    slide.classList.add('active');
  }
});
}

function changeSlide(n){
  index += n;
if(index >= slides.length){
  index = 0;
}else if(index < 0){
  index = slides.length -1;
}
  showSlide(index);
}
showSlide(index);