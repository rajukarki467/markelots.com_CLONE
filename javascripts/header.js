const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener('click', () =>{
  if(navLinks.style.display === 'block'){
    navLinks.style.display = 'none';
  }else{
    navLinks.style.display='block';
  }
});

