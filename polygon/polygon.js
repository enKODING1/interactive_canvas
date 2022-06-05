export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;

        this.angle = 0;
        this.PI2 = Math.PI * 2;
    }

    animate(ctx) {
        this.angle = this.PI2 / this.sides;

        ctx.save();
        ctx.filStyle = 'black';
        


        for (let i = 0; i < this.sides; i++) {
            const x = Math.cos(this.angle * i) * this.radius + this.x;
            const y = Math.sin(this.angle * i) * this.radius + this.y;
            ctx.beginPath();
            // ctx.rect(x,y,100,150);
            ctx.arc(x, y, 20, 0, this.PI2, false);
            
            ctx.closePath();
            ctx.restore();
            ctx.stroke();  
            
        //    (i==0) ? ctx.moveTo(x,y):ctx.lineTo(x,y);
        }
        
    }


}