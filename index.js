const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




window.addEventListener("resize",() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
})

    ctx.beginPath();
    ctx.arc(500,250,150,0,2 * Math.PI);
    ctx.strokeStyle ="blue"
    ctx.fillStyle = "yellow"; 
    ctx.fill()
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(430,200,30,0,2 * Math.PI);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(570,200,30,0,2 * Math.PI);
    ctx.fillStyle = "white"
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(570,200,10,0,2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(430,200,10,0,2 * Math.PI);
    ctx.fillStyle = "black"
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(510,300,60, 0, Math.PI);
    ctx.stroke();









