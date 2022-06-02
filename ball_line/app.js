

class App{
    constructor(){

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize',this.resize.bind(this));
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
        this.ball =new Array();
        let ball_count  = 6;
        
        for(let i = 0; i < ball_count;i++){
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = `rgba(${r},${g},${b},0.4)`;
            this.ball.push(new Ball(100,100,50,10,color))
        }
    }
    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
    }
    animate(){
        this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        window.requestAnimationFrame(this.animate.bind(this))
        
        for(let i = 0; i < this.ball.length ;i++){
            this.ball[i].draw(this.ctx,window.innerWidth,window.innerHeight);
        }
    }
}


class Ball {
    constructor(x, y, radius, speed,color) {
        this.x = Math.floor(Math.random() * window.innerWidth) ;
        this.y = Math.floor(Math.random() * 100)+ y ;
        this.dx = speed;
        this.dy = speed;
        this.radius = radius;
        this.speed = speed;
        this.color = color;


    }

    draw(ctx, stageWidth, stageHeight) {
       

        this.x += this.dx;
        this.y += this.dy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        this.crash(stageWidth, stageHeight);
        console.log(this.x,this.y)

    }

    crash(stageWidth, stageHeight) {
        this.weight += 0.5;
        this.directionX *= 0.997;

        let minX = this.radius;
        let minY = this.radius;

        let maxX = stageWidth - this.radius;
        let maxY = stageHeight - this.radius;

        if (this.x < minX || this.x > maxX) {
            this.dx *= -1;
            this.x += this.dx;
        } else if (this.y < minY || this.y > maxY) {
      
            this.dy *= -1;
            this.y += this.dy;
        }
      
     }

 
}


window.onload = ()=>{
    new App();
}