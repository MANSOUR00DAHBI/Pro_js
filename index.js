// INDEX.JS FILE 

function fillcircle(context, x,y,radius,color = "green"){
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI ,false);
    context.fillStyle = color ;
    context.fill();
}

(() => {
    
    console.log("Hello , World !");
    const canvas = document.getElementById("game");
    const context = canvas.getContext("2d");
    const radius  = 69;
    const Width = canvas.width ;
    const Height = canvas.height;
    
    let start ;
    let x = Width / 2;
    let y = Height / 2;
    let dx = 100;
    let dy = 100;
    function step(timestamp){
        if(start === undefined){
            start = timestamp;
        }
        const dt = (timestamp - start) * 0.001;
        start = timestamp;
        if(x + radius   >= Width || x - radius <= 0 ) dx =-dx ;
        if(y + radius  >= Height || y - radius <= 0 ) dy =-dy ;
        x += dx * dt ;
        y += dy * dt ;
        context.clearRect(0,0,Width,Height);
        fillcircle(context,x, y,radius,"red");
        window.requestAnimationFrame(step);
    }
     window.requestAnimationFrame(step);

   // context.moveTo(0,0);
   // context.lineTo(Width,Height );
   // context.stroke();

})();
