export class Bar{
    constructor(x,y,width,height,move_range){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.move_range = move_range;
            this.mv = move_range;

    }

    move(ctx){
       this.x = this.move_range;
       ctx.fillStyle = 'purple';
       ctx.beginPath();
       ctx.rect(this.x,this.y,this.width,this.height);
       ctx.fill();
    }

    update(move_range){
        this.move_range = move_range;
        let minX = 0;
        let maxX = window.innerWidth - this.width;

        if(this.move_range < minX){
            this.move_range = minX;
            return minX;
        }else if(this.move_range > maxX){
            this.move_range = maxX;
           return maxX;
        }

    }

}