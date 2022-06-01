import {Shape} from './Shape.js';
import {Bar} from './Bar.js';

class App{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize',this.resize.bind(this));
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

      //bar
        this.bar_width = 150;
        this.bar_height = 80;
        this.bar_x = window.innerWidth/2 - this.bar_width/2;
        this.bar_y = window.innerHeight - this.bar_height;
        this.bar_range = this.bar_x;
        
        this.bar = new Bar(this.bar_x,this.bar_y,this.bar_width,this.bar_height,this.bar_range);
        window.addEventListener('keydown',(e)=>{
            //left : 37 , right : 39
              let status=  this.bar.update(this.bar_range); 
              if(status == 0){
                  this.bar_range = status;
              }else if(status == window.innerWidth - this.bar_width){
                  this.bar_range = status;
              }

              if(e.keyCode == 37){
                this.bar_range -=10;
               }else if(e.keyCode == 39){
                this.bar_range += 10
               }

               this.bar.update(this.bar_range)
           
        })

        //shape

        this.shape = new Array();
        this.shape_count = 3;
        
        for(let i = 0; i < this.shape_count ;i++){
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let radius = Math.floor((Math.random()* 30)+15);
            let speed = 10;
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = `rgba(${r},${g},${b},0.5)`;
            this.shape.push(new Shape(x,y,radius,speed,color));
            this.shape[i].crashBar(this.bar_x,this.bar_y,this.bar_width,this.bar_height);
        }

        
    }

    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
    }
    animate(){
        this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        window.requestAnimationFrame(this.animate.bind(this));
        for(let i = 0 ;i < this.shape.length ; i++){
            this.shape[i].draw(this.ctx);
        }

        
        this.bar.move(this.ctx);
    }
}



window.onload = ()=>{
    new App();
}