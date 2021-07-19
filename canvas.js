/*
window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    // re sizing
   canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        // to avoid the connection with the previous line
        context.beginPath();
    }
    function draw(e) {
        if(!painting) return;
        context.lineWidth = 25;
        context.lineCap = "round"
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.strokeStyle ="blue";
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }


    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});

*/


// code for inifinite canvas from npm

window.addEventListener('load', () => {
// var canvasElement = document.getElementById("canvas");
const canvasElement = document.querySelector("#canvas");

var rect = canvasElement.getBoundingClientRect();
// canvasElement.width = rect.width;
// canvasElement.height = rect.height;
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

var canvas = new InfiniteCanvas(canvasElement);
var context = canvas.getContext("2d");


// Set line width
context.lineWidth = 10;

// Wall
context.strokeRect(75, 140, 150, 110);

// Door
context.fillRect(130, 190, 40, 60);

// Roof
context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();
 
});

