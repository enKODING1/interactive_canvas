export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
         

        this.angle = 0;
        this.PI2 = Math.PI * 2;
        this.rotate = 0;
    
    
    }

    animate(ctx,moveX) {
        ctx.save();
        // ctx.filStyle = 'black';
        // ctx.beginPath();
        this.angle = this.PI2 / this.sides;
        const angle2 = this.PI2/4;


         ctx.translate(this.x,this.y);
         this.rotate += moveX * 0.008;
         ctx.rotate(this.rotate);
   

        for (let i = 0; i < this.sides; i++) {
            const x = Math.cos(this.angle * i) * this.radius ;
            const y = Math.sin(this.angle * i) * this.radius ;
            
           
            ctx.save();

            
            ctx.fillStyle =  'blue';
            
            ctx.translate(x,y);
            ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
            ctx.beginPath();
            for(let j = 0; j < 4; j++){
                const x2 = 180 *  Math.cos(angle2 * j);
                const y2 = 180 * Math.sin(angle2 * j);
                (j==0) ? ctx.moveTo(x2,y2) : ctx.lineTo(x2,y2);
            }         
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        // (i==0) ? ctx.moveTo(x,y):ctx.lineTo(x,y);
        }
        // ctx.closePath();  
        // ctx.fill();  
        ctx.restore();

    }


}