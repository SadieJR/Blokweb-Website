// JavaScript Document
console.log ("hallo");

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toonMenu);

function toonMenu() {
	var deNav = document.querySelector("nav");
	deNav.classList.toggle("toonMenu");
}

var Uitklappen = document.querySelector("nav button");

Uitklappen.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deNav = event.target.parentNode;
    deNav.classlist.toggle("toonMenu");
}