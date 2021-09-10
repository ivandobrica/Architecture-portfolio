// 100vh on mobile when adress bar is present
function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}
window.addEventListener('resize', appHeight);
appHeight();


//horizontal scrollbar
window.onscroll = function() {myFunction()};
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


//page loader
// let body = document.querySelector("body");
// window.addEventListener("load", () => {
//   const preload = document.querySelector(".preload-wrapper");
//   preload.classList.add("preload-finish");
//   setTimeout(function() {
//     body.classList.remove("no-scroll");
//   }, 5000);
// });


//hamburger action
let hamburger = document.querySelector(".hamburger");
let link = document.querySelector(".overlay__item");
let overlay = document.querySelector(".overlay");
let navigationList = document.querySelector(".navigation__list");
let overlayAction = [hamburger, link];
for(let i = 0; i < overlayAction.length; i++) {
  overlayAction[i].addEventListener("click", function () {
    overlay.classList.toggle("is-open");
    hamburger.classList.toggle("is-active");
    navigationList.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  })
};


//projects horizontal scroll
let vwWidth = window.innerWidth;
let controller = new ScrollMagic.Controller();

let horizontalSlide = new TimelineMax()
  .to(".horizontal__wrapper", 0.5, {x: 0, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 1, {x: -vwWidth, ease: Power1.easeOut}, )	
  .to(".horizontal__wrapper", 0.5, {x: -vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 1, {x: -2*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 0.5, {x: -2*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 1, {x: -3*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 0.5, {x: -3*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 1, {x: -4*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 0.5, {x: -4*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 1, {x: -5*vwWidth, ease: Power1.easeOut}, )
  .to(".horizontal__wrapper", 0.5, {x: -5*vwWidth, ease: Power1.easeOut}, )

new ScrollMagic.Scene({
  triggerElement: ".horizontal__wrapper",
  duration: "350%",
  offset: 0,
  triggerHook: -0.02
})
.setPin('.horizontal__wrapper')
.setTween(horizontalSlide)
.addTo(controller)


//project view more button
let projectImage = document.querySelectorAll(".project__image");
let viewMore = document.querySelectorAll(".project__view-more");
for(let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("mouseover", function() {
    projectImage[i].classList.remove("filter");
  })
  viewMore[i].addEventListener("mouseout", function() {
    for(let i = 0; i < projectImage.length; i++) {
      projectImage[i].classList.add("filter");
    }
  })
}


//remove about me image, show CV
let showCV = document.querySelector(".about__next");
let imgContainer = document.querySelector(".about__info");
let showImg = document.querySelector(".about__back");
showCV.addEventListener("click", function() {
  imgContainer.classList.add("is-open");
  showImg.classList.remove("hidden");
  showCV.classList.add("hidden");
})
showImg.addEventListener("click", function() {
  imgContainer.classList.remove("is-open");
  showImg.classList.add("hidden");
  showCV.classList.remove("hidden");
})