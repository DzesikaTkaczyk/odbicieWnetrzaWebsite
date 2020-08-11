const previous = document.getElementById('prev');
const next = document.getElementById('next');
const images = document.querySelectorAll('.carousel-photo');

const imagesLen = images.length;

function isActive () {
  for (let i = 0; i < imagesLen; i++) {
    if (images[i].classList.contains('carousel-active')) {
      return i;
    }
  }
}

function nextPicture () {
  let i = isActive();
  images[i].classList.remove('carousel-active');
  i += 1;
  if (i >= imagesLen) {
    i = 0;
  }
  images[i].classList.add('carousel-active');
}

next.addEventListener('click', nextPicture);

function prevPicture () {
  let i = isActive();
  images[i].classList.remove('carousel-active');
  i -= 1;
  if (i < 0) {
    i = imagesLen - 1;
  }
  images[i].classList.add('carousel-active');
}

previous.addEventListener('click', prevPicture);
