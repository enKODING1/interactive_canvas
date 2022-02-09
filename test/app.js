const canvas = document.getElementById('canvas')
let ctx =canvas.getContext('2d');
let mousedown = false;
let scale = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-100;

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight-100;
})


window.addEventListener('mousedown',(e)=>{

  mousedown = true;
})

window.addEventListener('mouseup',(e)=>{
    mousedown = false;
})

window.addEventListener('mousemove',(e)=>{
    if(mousedown == true){
        draw(e)
        lineDraw(e)
    }else{
        lineDraw(e)
    }
})

window.addEventListener('mousewheel',(e)=>{
    scale += e.deltaY * -0.0128
    sizeDraw(e,scale);

})

function draw(e){
    ctx.fillStyle = "#5bd3e3";
    ctx.beginPath();
    ctx.arc(e.clientX,e.clientY,scale,0,Math.PI *2);
    ctx.fill();
}
function lineDraw(e){
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(e.clientX,e.clientY,scale,0,Math.PI *2);
    ctx.stroke();
}

function sizeDraw(e,scale){
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(e.clientX,e.clientY,scale,0,Math.PI *2);
    ctx.fill();
}

