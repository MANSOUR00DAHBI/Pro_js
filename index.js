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
    const Width = canvas.width ;
    const Height = canvas.height;
    const radius  = 69;
    fillcircle(context,Width / 2, Height / 2,radius,"red");
   // context.moveTo(0,0);
   // context.lineTo(Width,Height );
   // context.stroke();



})();
