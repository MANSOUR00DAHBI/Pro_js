(() => {
    console.log("Hello , World !");
    let canvas = document.getElementById("game");
    let context = canvas.getContext("2d");
    context.moveTo(0,0);
    context.lineTo(200,100);
    context.stroke();
})();
