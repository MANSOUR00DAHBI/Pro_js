// INDEX.JS FILE 

class V2 {
    constructor (x,y){
        this.x = x ;
        this.y = y ;
    }

    add(that){
        return new V2(this.x + that.x , this.y + that.y);
    }
    scale(s){
        return new V2(this. x * s , this.y * s );
    }
}

function fillcircle(context,center,radius,color = "green"){
    context.beginPath();
    context.arc(center.x,center.y,radius,0,2*Math.PI ,false);
    context.fillStyle = color ;
    context.fill();
}


(() => {
    
    const canvas = document.getElementById("game");
    const radius  = 69;
    const context = canvas.getContext("2d");
    const speed = 1000;
    let start ;
    let pos = new V2(radius + 10 , radius + 10);
    let lev  = new V2( 0 , 0 );

    let directionMap ={
             'KeyS'  : new V2( 0 , speed ),              
             'KeyW' : new V2(0 , -speed ),          
             'KeyA'  : new V2( -speed, 0 ),             
             'KeyD'  : new V2( speed , 0 ), 
    };

    function step(timestamp){
        if(start === undefined){
            start = timestamp;
        }
    const dt = (timestamp - start) * 0.001;
    start = timestamp;

    const Width =   window.innerWidth ;
    const    Height =  window.innerHeight;
    canvas.width = Width;
    canvas.height = Height;
        pos = pos.add(lev.scale(dt));
        context.clearRect(0,0,Width,Height);
        fillcircle(context,pos,radius,"red");
        window.requestAnimationFrame(step);
    }
     window.requestAnimationFrame(step);

     document.addEventListener('keydown' , event => {
          if(event.code in directionMap){
              lev = directionMap[event.code];
          }   
     });

          document.addEventListener('keyup' , event => {
          if(event.code in directionMap){
              lev = new V2(0,0);
          }   
     });

})();
