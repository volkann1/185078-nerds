var link = document.querySelector(".contacts-btn")
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close-popup");
var overlay = document.querySelector(".overlay");

link.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.add("pop-up-show");
  overlay.classList.add("pop-up-show");
});

close.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("pop-up-show");
  overlay.classList.remove("pop-up-show");
});

overlay.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("pop-up-show");
  overlay.classList.remove("pop-up-show");
});

