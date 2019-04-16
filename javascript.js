//ve hinh tron don gian
function Circles(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

//ban kinh ngau nhien
/*function createCircles() {
    let ctx= document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let circles=new Circles(500,500,radius);
    ctx.beginPath();
    ctx.arc(circles.x,circles.y,circles.radius,0,2*Math.PI);
    ctx.fill();
}*/

//mau ngau nhien
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

/*function createCircles() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let circles = new Circles(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circles.x, circles.y, circles.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}*/
//vi tri ngau nhien

function createCircles() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
    let circles = new Circles(x, y, radius);
    ctx.beginPath();
    ctx.arc(circles.x, circles.y, circles.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function createMultipleCircle() {
    for (let i=1;i<20;i++){
        createCircles();
    }
}
createMultipleCircle();
function moveCircle() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let x = canvas.width*Math.floor(Math.random()*10);
    let y = canvas.height*Math.floor(Math.random()*10);
    let dx = 2;
    let dy = -2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createMultipleCircle();
    x += dx;
    y += dy;
}
setInterval(moveCircle, 500);
