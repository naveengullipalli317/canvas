{/* <script src="https://cdn.jsdelivr.net/npm/ef-infinite-canvas@0.5.0-alpha/dist/infinite-canvas.js"></script> */}

/* window.addEventListener('load', () => { */
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
   
    // re sizing

    window.addEventListener("resize", function() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        
    });
    const mouse = {
        x:null,
        y:null,
    }
    canvas.addEventListener("click", function(event){
        mouse.x = undefined;
        mouse.y = undefined;
        drawCircle();
    })
    canvas.addEventListener("mousemove", function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        drawCircle();
    })
    function drawCircle() {
    context.fillStyle = "blue";
    context.beginPath();
    context.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    context.fill();
    }
    
    function animate(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCircle();
        requestAnimationFrame(animate);
    }
    animate();
  
    
/* 
     context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.lineTo(300, 200);
    context.closePath();
    context.stroke(); */ 

    // variables 
   /*  let painting = false;

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
    canvas.addEventListener("mousemove", draw); */
/* }); */