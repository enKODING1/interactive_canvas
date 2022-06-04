class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        window.addEventListener('resize',this.resize.bind(this));
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        this.mouseDown = false;
        
        window.addEventListener('pointerdown',this.onDown.bind(this));
        window.addEventListener('pointermove',this.onMove.bind(this));
        window.addEventListener('pointerup',this.onUp.bind(this));
        
     
    }

    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
      
    }

    onDown(e){
        this.mouseDown = true;
        console.log('down');
    }

    onMove(e){
        if(this.mouseDown == true){
            console.log('move');
        }
        
    }

    onUp(e){
        this.mouseDown = false;
        console.log('up');
    }
}

class Polygon{
    constructor(x,y,radius,side){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.side = side;
         
    }


}

window.onload = ()=>{
    new App();
}