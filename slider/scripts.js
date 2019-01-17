const defaultInterval = 5000;
let imageIndex = 1;
let nextSlide = 2;
let imageGallery = document.querySelectorAll('.gallery-item');
let currentImageIndex = document.querySelector('.currentImage');
currentImageIndex.innerText = imageIndex;

const totalImageCount = document.querySelector('.totalImages');
totalImageCount.innerText = imageGallery.length;

let timeEvent = setTimeout(autoImageUpdate, defaultInterval);

function selectNextImage() {
    console.log('next');
    if (imageIndex >= 5) {
        imageIndex = 1;
        nextSlide = imageIndex + 1;
    } else {
        imageIndex++;
        nextSlide++;
    }

console.log(imageIndex);
updateActiveImage(imageIndex, nextSlide);
}

function selectPreviousImage() {
    console.log('previous');

    if (imageIndex <= 1) {
    	imageIndex = imageGallery.length;
    	nextSlide = 1;
    }
    else {
    	imageIndex--;
    	nextSlide = imageIndex + 1;
    }

    console.log(imageIndex);
    updateActiveImage(imageIndex, nextSlide);
}

function updateActiveImage(n, m) {
    console.log('update image');
    console.log('n: ' + n);
    console.log('m: ' + m);
    currentImageIndex.innerText = n;

    for (let i = 0; i < imageGallery.length; i++) {
        imageGallery[i].classList.remove('active');
        imageGallery[i].classList.remove('nextSlide');
    }
    imageGallery[imageIndex - 1].classList.add('active');
    imageGallery[m - 1].classList.add('nextSlide');
    clearTimer();
    timeEvent = window.setTimeout(autoImageUpdate, defaultInterval);
}

function autoImageUpdate() {
    console.log('timer hit');
    imageIndex++;
    nextSlide++;
    if (imageIndex > imageGallery.length) {
        imageIndex = 1;
    }
    if (nextSlide > imageGallery.length) {
        nextSlide = 1;
    }
    timeEvent = window.setTimeout(updateActiveImage(imageIndex, nextSlide), defaultInterval);
}

function clearTimer() {
    console.log('clear timer');
    clearTimeout(timeEvent);
}