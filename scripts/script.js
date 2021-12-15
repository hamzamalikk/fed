// JavaScript Document

var deMenu =
document.querySelector("header article");

var deMenuButton =
document.querySelector("header button");

var deHeleMain =
document.querySelector("main");

deMenuButton.addEventListener("click", openMenu);


function openMenu() {
deMenu.classList.toggle("toggle");
deHeleMain.classList.toggle("nietscrollen");
}