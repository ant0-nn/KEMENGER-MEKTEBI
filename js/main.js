const aboutUs = document.querySelectorAll('.nav-about-us'),
      navCatalogue = document.querySelectorAll('.nav-catalogue'),
      certificates = document.querySelectorAll('.nav-certificates'),
      reviews = document.querySelectorAll('.nav-reviews'),
      contact = document.querySelectorAll('.nav-contact');

const aboutUsSection = document.querySelector('.about .container'),
      catalogueSection = document.querySelector('.catalogue .container'),
      certificateSection = document.querySelector('.certificate .container'),
      reviewsSection = document.querySelector('.reviews .container'),
      contactSection = document.querySelector('.contact .container');


const btnNextCatalogue = document.querySelector('.btn-next-catalogue'),
      btnPrevCatalogue = document.querySelector('.btn-prev-catalogue'),
      btnNextReviews = document.querySelector('.btn-next-reviews'),
      btnPrevReviews = document.querySelector('.btn-prev-reviews');

const slidesCatalogue = document.querySelectorAll('.catalogue__slider__slide'),
      slidesReviews = document.querySelectorAll('.reviews__slider__slide')

let index = 0;

// nav menu

const addListenerToNav = (arr, section) => {
    arr.forEach(elem => {
        elem.addEventListener('click', () => {
            section.scrollIntoView();
        });
    });
};

addListenerToNav(aboutUs,aboutUsSection);
addListenerToNav(navCatalogue,catalogueSection);
addListenerToNav(certificates,certificateSection);
addListenerToNav(reviews,reviewsSection);
addListenerToNav(contact,contactSection);
// catalogue slider

const activeSlideCatalogue = n => {
    for(slide of slidesCatalogue) {
        slide.classList.remove('active');
    }
    slidesCatalogue[n].classList.add('active');
}

const nextSlideCatalogue = () => {
    if(index === slidesCatalogue.length - 1) {
        index = 0;
        activeSlideCatalogue(index);
    }  else {
        index++;
        activeSlideCatalogue(index);
    }
}

const prevSlideCatalogue = () => {
    if(index === 0) {
        index = slidesCatalogue.length - 1;
        activeSlideCatalogue(index);
    } else {
        index--;
        activeSlideCatalogue(index);
    }
}

btnNextCatalogue.addEventListener('click', nextSlideCatalogue);
btnPrevCatalogue.addEventListener('click', prevSlideCatalogue);

// reviews slider

const activeSlideReviews = n => {
    for(slide of slidesReviews) {
        slide.classList.remove('active');
    }
    slidesReviews[n].classList.add('active');
}

const nextSlideReviews = () => {
    if(index === slidesReviews.length - 1) {
        index = 0;
        activeSlideReviews(index);
    }  else {
        index++;
        activeSlideReviews(index);
    }
}

const prevSlideReviews = () => {
    if(index === 0) {
        index = slidesReviews.length - 1;
        activeSlideReviews(index);
    } else {
        index--;
        activeSlideReviews(index);
    }
}

btnNextReviews.addEventListener('click', nextSlideReviews);
btnPrevReviews.addEventListener('click', prevSlideReviews);