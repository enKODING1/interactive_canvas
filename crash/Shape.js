export class Shape{
    constructor(x,y,radius,speed,color){
        this.x = x;
        this.y = y;
        this.sx = speed;
        this.sy = speed;
        this.radius =  radius;
        this.speed = speed;
        this.color = color;
        this.width = Math.floor((Math.random()*100 ) + 20);
       this.height = Math.floor((Math.random()*100 ) + 20);
    }
    //원으로 그리는 옵션
    draw(ctx){
        this.x += this.sx;
        this.y += this.sy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        ctx.fill();
        this.crash();
   }
   //사각형으로 그리는 옵션
   drawRect(ctx){
       this.x += this.sx;
       this.y += this.sy; 
       

       ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill();
        this.crash();

   }

   crash(){
       let minX = this.radius;
       let minY = this.radius;

       let maxX = window.innerWidth + this.radius;
       let maxY = window.innerHeight + this.radius;

       if(this.x > maxX || this.x < minX){
           this.sx = -this.sx;
       }else if(this.y > maxY || this.y < minY){
           this.sy =  -this.sy;
       }


       
   }


    crashBar(barX,barY,barWidth,barHeight){
    let top = window.innerHeight  ;
    let bottom = window.innerHeight;

    let start_left = barX;
    let bottom_left = barX + barHeight;

    let start_right = barX + barWidth;
    let bottom_right = start_right + barHeight;

    if(this.x > top){
        this.sx = -this.sx;
    }
   
    

}
  
}