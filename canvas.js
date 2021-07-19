window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    
    // re sizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;



     /*  context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.lineTo(300, 200);
    context.closePath();
    context.stroke(); */

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
        context.strokeStyle ="green";
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }


    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});