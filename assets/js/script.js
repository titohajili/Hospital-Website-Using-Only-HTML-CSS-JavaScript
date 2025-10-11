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