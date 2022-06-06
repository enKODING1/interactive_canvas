export class Ball {
    constructor(x, y, radius, speed,color) {
        this.x = Math.floor(Math.random() * window.innerWidth/2) +x;
        this.y = Math.floor(Math.random() * window.innerHeight/2) + y ;
        this.direction = Math.floor(Math.random() * 2)+1;

        this.dx = (Math.random() * speed )- speed;
        this.dy = (Math.random() * speed) -speed;
        this.radius = Math.random() * radius ;
        this.speed = speed;
        this.color = color;
        this.ballSize = 0.04;
        this.sizebackup = this.radius;

    }

    draw(ctx, stageWidth, stageHeight) {
       

        this.x += this.dx;
        this.y += this.dy;


        if(this.radius > 3){
            this.ballSize = -0.04;
        }else if(this.radius < 0.10){
            this.ballSize = 0.04;
        }
        this.radius += this.ballSize;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        this.crash(stageWidth, stageHeight);


    }
	
	moveMouse(x,y,ctx){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(x,y,this.radius,0,Math.PI * 2,false);
		ctx.fill();
		
	}

    crash(stageWidth, stageHeight) {
        // this.weight += 0.5;
        // this.directionX *= 0.997;

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
