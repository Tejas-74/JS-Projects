'use strict';
 
//loading will be ebd after document loaded
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

//add event listner on muliple elements
const addEventListener = function (elements, eventType, callback){
 for(let i = 0, len = elements.length; i < len; i++){
    elements[i].addEventListener(eventType, callback);
 }
}

//navbar
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
 }

 addEventListener(navTogglers, "click", toggleNavbar);

 //header
 const header = document.querySelector("[data-header]");

 let lastScollPos = 0;

 const hideHeader = function () {
    const isScrollBottom = lastScollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScollPos = window.scrollY;
 }

 window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
 })