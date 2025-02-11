// INDEX.JS FILE 


/*
function V2(x,y){
    return {x,y};
}

function addV2(a,b){
    return V2(a.x  + b.x , a.y + b.y);
}

function scaleV2(v , s ){
    return V2(v.x * s , v.y * s );
}
*/
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
    
    //console.log("Hello , World !");
    const canvas = document.getElementById("game");
    const radius  = 69;
    const context = canvas.getContext("2d");
    const speed = 100;
    let start ;
    let pos = new V2(radius + 10 , radius + 10);
    let lev  = new V2( 0 , 0 );

    let directionMap ={
             'KeyS'  : new V2( 0 , speed ),              
             'KeyW' : new V2(0 , -speed ),          
             'KeyA'  : new V2( -speed, 0 ),             
             'KeyD'  : new V2( speed , 0 ),    }
    /*let dy = speed ;
    let dx = speed ;*/
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

       /* if(x + radius   >= Width || x - radius <= 0 ) dx =-dx ;
        if(y + radius  >= Height || y - radius <= 0 ) dy =-dy ;
        x += dx * dt ;
        y += dy * dt ;*/
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
     /* switch (event.code){
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
         }*/
     });

})();
