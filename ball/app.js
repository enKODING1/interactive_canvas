import {Ball} from './Ball.js';

class App{
    constructor(){
       this.canvas = document.getElementById('canvas');
       this.ctx = this.canvas.getContext('2d');
       this.canvas.width = window.innerWidth;
       this.canvas.height = window.innerHeight;

       this.ball = new Ball(100,100,100);
    

       window.addEventListener('resize',this.resize.bind(this));
       window.requestAnimationFrame(this.animate.bind(this));

    }
    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    animate(){
        this.move();
        window.requestAnimationFrame(this.animate.bind(this));
    }

    move(){
        window.addEventListener('mousemove',(e)=>{
            this.ball.draw(this.ctx,e.x,e.y);
        })
    }

  
}

window.onload = ()=>{
    new App();
}