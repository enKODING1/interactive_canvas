const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'white';
ctx.lineWidth =3 ;
ctx.beginPath();
ctx.arc(100,100,50,0,Math.PI*2);
ctx.stroke();

