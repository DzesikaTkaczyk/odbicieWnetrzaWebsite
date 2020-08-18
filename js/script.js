'use strict';

//navbar
window.addEventListener ? 
window.addEventListener("load",script_js,false) : 
window.attachEvent && window.attachEvent("onload",script_js);

function script_js () {
	const burger = document.getElementById('hamburger');
	function toggleMenu(visible) { 
	  document.querySelector('.mobile_menu').classList.toggle('show_mobile_menu', visible);
	}

	burger.addEventListener('click', function(e) {
	  e.preventDefault();
	  toggleMenu();
    });
}

//carousels
const carousels = document.querySelectorAll('.carousel');
const carouselsLen = carousels.length

const previous = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
let images = [];
let imagesLen = [];

for (let i = 0; i < carouselsLen; i++) {
  images[i] = carousels[i].querySelectorAll('.carousel-photo');
  imagesLen[i] = images[i].length;
  previous[i].addEventListener('click', prevPicture);
  next[i].addEventListener('click', nextPicture);
}

function isActive (carouselNr) {
  for (let i = 0; i < imagesLen[carouselNr]; i++) {
    if (images[carouselNr][i].classList.contains('carousel-active')) {
      return i;
    }
  }
}

function nextPicture () {
  for( let j = 0; j < carouselsLen; j++ ){
    if (carousels[j] == this.parentElement){
      let i = isActive(j);
      images[j][i].classList.remove('carousel-active');
      i += 1;
      if (i >= imagesLen[j]) {
        i = 0;
      }
      images[j][i].classList.add('carousel-active');
    }
  }
}

function prevPicture () {
  for( let j = 0; j < carouselsLen; j++){
    if(carousels[j] == this.parentElement){
      let i = isActive(j);
      images[j][i].classList.remove('carousel-active');
      i -= 1;
      if (i < 0) {
        i = imagesLen[j] - 1;
      }
      images[j][i].classList.add('carousel-active');
    }
  }
}

//day or night mode
const dayNightButton = document.querySelector('.smile');
let mode;
mode = localStorage.getItem('mode');

//first start of the webside
(function() {
  if (mode === 'day_mode') {
    dayMode();
  } else if (mode === 'night_mode'){
    nightMode()
  } else {
    dayMode()
  }
})()

//button
dayNightButton.addEventListener('click', (e) => {
  if (mode === 'day_mode') {
    nightMode()
  } else if (mode === 'night_mode'){
    dayMode();
  } else {
    nightMode()
  }
});

function dayMode() {
  document.body.classList.remove('night_mode');
  document.body.classList.add('day_mode')
  localStorage.setItem('mode', 'day_mode');
  mode = localStorage.getItem('mode');
}

function nightMode() {
  document.body.classList.remove('day_mode');
  document.body.classList.add('night_mode')
  localStorage.setItem('mode', 'night_mode');
  mode = localStorage.getItem('mode');
}