class App{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize',this.resize.bind(this));
        this.resize();
        
        window.requestAnimationFrame(this.animate.bind(this));
        this.ball = new Ball(100,100,20,10);
    }

    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.hidden = window.innerHeight;
    
    }

    animate(){
        this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        window.requestAnimationFrame(this.animate.bind(this));
        this.ball.draw(this.ctx);
    }
   
}


class Ball{
    constructor(x,y,radius,speed){
        this.x = x;
        this.y = y;

        this.dx = speed;
        this.dy = speed;

        this.radius = radius;
        this.speed = speed;
    }

    draw(ctx){
        this.x += this.dx;
        this.y += this.dy;

        ctx.fillStyle= 'red';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI *2);
        ctx.fill();
        
        this.crash();

    }

    crash() {
        let minX = this.radius;
        let minY = this.radius;

        let maxX = window.innerWidth - this.radius;
        let maxY = window.innerHeight - this.radius;

        if (this.x > maxX || this.x < minX) {
            this.dx *= -1;
            this.x += this.dx;
        } else if (this.y > maxY || this.y < minY) {
            this.dy *= -1;
            this.y += this.dy;
        }


    }
}


window.onload = ()=>{
    new App();
    
}