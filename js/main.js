const words = ["Frontend Developer", "Web Development Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1500;
const textSpan = document.getElementById("text");
const navbarToggler = document.querySelector(`.navbar-toggler`);
// const cursor = document.querySelector(`.cursor`)

// titles and cursor
function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textSpan.textContent = currentWord.substring(0, charIndex);

  let delay = isDeleting ? erasingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentWord.length) {
    delay = delayBetweenWords;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

//navbar color change when scrolling
const navbar = document.getElementById(`navbar`);
const home = document.getElementById(`home`);

window.addEventListener(`scroll`, function(){
  // let homeHeight = home.offsetHeight;
  let navbarHeight = navbar.offsetHeight;

  if(scrollY >= navbarHeight){
    navbar.classList.add(`bg-body-tertiary`);
    navbar.classList.remove(`bg-transparent`);
  } else {
    navbar.classList.remove(`bg-body-tertiary`);
    navbar.classList.add(`bg-transparent`);
  }
})

//hero section animation when opening the document
document.addEventListener(`DOMContentLoaded`, () => {
  const fadeElements = document.querySelectorAll(`.fade-in`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`active`);
      }
    });
  }, {
    threshold: 0.1
  });
  fadeElements.forEach(el => observer.observe(el));
});

//navbar color for small screens
navbarToggler.addEventListener(`click`, function(){
  if(navbar.classList.contains(`bg-transparent`)){
    navbar.classList.toggle(`bg-body-tertiary`)
  }
})