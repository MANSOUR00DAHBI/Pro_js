// INDEX.JS FILE 

function fillcircle(context, x,y,radius,color = "green"){
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI ,false);
    context.fillStyle = color ;
    context.fill();
}

(() => {
    
    //console.log("Hello , World !");
    const canvas = document.getElementById("game");
    const radius  = 69;
    const context = canvas.getContext("2d");
    const speed = 0;
    let start ;
    let x = radius + 10 ;
    let y = radius + 10 ;
    let dy = speed ;
    let dx = speed ;
    function step(timestamp){
        if(start === undefined){
            start = timestamp;
        }
        const dt = (timestamp - start) * 0.001;
        start = timestamp;

    const Width =   window.innerWidth ;
    const Height =  window.innerHeight;
    canvas.width = Width;
    canvas.height = Height;

        if(x + radius   >= Width || x - radius <= 0 ) dx =-dx ;
        if(y + radius  >= Height || y - radius <= 0 ) dy =-dy ;
        x += dx * dt ;
        y += dy * dt ;
        context.clearRect(0,0,Width,Height);
        fillcircle(context,x, y,radius,"red");
        window.requestAnimationFrame(step);
    }
     window.requestAnimationFrame(step);

     document.addEventListener('keydown' , event => {
         switch (event.code){
             case 'KeyS' : {
                 console.log("down");
             } break;
             case 'KeyW' : {
                 console.log("up");
             } break;
             case 'KeyA' : {
                 console.log("left");
             } break;
             case 'KeyD' : {
                 console.log("right");
             } break;
         }
     });

})();
