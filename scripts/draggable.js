let dragged;



document.addEventListener("dragstart", function (event) {
    dragged = event.target;
}, false);


document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);


document.addEventListener("drop", function (event) {
    event.preventDefault();
    dragged.style.position = "absolute";
    dragged.style.top = event.clientY + "px";
    dragged.style.left = event.clientX + "px";

}, false);
