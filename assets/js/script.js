"use script";

// add evet listener on multiple elements

const addEventOnElements = function (elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// preloader    

//preloader will be visible until document load

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

// mobile navbar

//show the mobile navbar when click manu button
// and hidden after click menu close button or overlay

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}


addEventOnElements(navTogglers, "click", toggleNav);
