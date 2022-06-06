import {Item} from './Item.js';


class App{
    constructor(){
        const ITEM_LIST = {
            'BALL':'./ball/index.html',
            'BALL_LINE':'./ball_line/index.html',
            'CRASH':'./crash/index.html',
            'GRAVITY':'./gravity/index.html',
            'PARTICLE':'./particle/index.html',
            'PARTICLE CRASH':'./particle_crash/index.html',
            'POLYGON\n(clone coding)':'./polygon/index.html',
            'TEST':'./test/index.html',
          };



     

      

        this.content = document.getElementById('content');//부모요소
        


        this.item = new Item(this.content,ITEM_LIST);
        this.item.create();
    
    
        this.mouseDown = false;
        this.moveX = 0;
        this.backupX = 0;
        this.speed = 0;
      
        
        window.addEventListener('pointerdown',this.onDown.bind(this));

        window.addEventListener('pointermove',this.onMove.bind(this));

        window.addEventListener('pointerup',this.onUp.bind(this));
        
        window.requestAnimationFrame(this.update.bind(this));

        
    }

    update(){
     
        window.requestAnimationFrame(this.update.bind(this));
        this.moveX *= 0.97;
        this.item.moveAnimate(this.moveX);
      
        
        
        
    }

    onDown(e){
        this.mouseDown = true;
        this.offsetX = e.clientX;
        this.moveX = 0;
        
    }


    onMove(e){
        if(this.mouseDown == true){
            e.preventDefault();
            this.moveX = e.clientX - this.offsetX;
    
         
        }

    }

    onUp(e){
        this.mouseDown = false;
        
        
    }
}


window.onload = ()=>{
    new App();
}