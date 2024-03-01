'use strict';
//loading will be ebd after document loaded
const preloader = document.querySelector("[data-preload");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});