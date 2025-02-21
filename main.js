// CODE FOR NAVBAR HAMBURGER
function hamburger(){
    const hamburgers = document.querySelectorAll(".hamburgers");
    hamburgers.forEach(hamburgersBars =>{
        hamburgersBars.classList.toggle("active")
        if(hamburgersBars.classList.contains("active")){
            addNavBar();
        }else{
            removeNavBar();
        }
    })
}
function addNavBar(){
    const navBar = document.querySelector('nav');
    navBar.classList.add("active");
}
function removeNavBar(){
    const navBar = document.querySelector('nav');
    navBar.classList.remove("active");
}
const hamburgerContainer = document.querySelector(".hamburger-container");

hamburgerContainer.addEventListener("click", ()=>{hamburger()});


// CODE FOR HERO-SECTION SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic sliding
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause automatic sliding on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

// Initial slide display
showSlide(currentSlide);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        0:{
            slidesPerview: 1
        },
        620: {
            slidesPerview: 2
        },
        1024: {
            slidesPerview: 3
        },
    }
  });
// COPYRIGHT YEAR CODE

const copyrightYear = document.querySelector('.copyright-date');

const APIYear = new Date();
const year = APIYear.getFullYear();
copyrightYear.innerText = year.toString();