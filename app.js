import {Item} from './Item.js';

class App{
    constructor(){
        
        //나중에 지울것 테스트용
        this.test = document.getElementById('test');



        this.content = document.getElementById('content');//부모요소
        this.itemCount = 4;


        this.item = new Item(this.content,this.itemCount);
        this.item.create();
    
    
        this.mouseDown = false;
        this.moveX = 0;
        this.backupX = 0;
      
        
        window.addEventListener('pointerdown',this.onDown.bind(this));

        window.addEventListener('pointermove',this.onMove.bind(this));

        window.addEventListener('pointerup',this.onUp.bind(this));
        
        window.requestAnimationFrame(this.update.bind(this));
    }

    update(){
      
        window.requestAnimationFrame(this.update.bind(this));
        
        // this.item.moveAnimate(this.moveX);
        this.item.moveAnimate(this.moveX,this.test);
        
    }

    onDown(e){
        this.mouseDown = true;
        this.offsetX = e.clientX;
    }


    onMove(e){
        if(this.mouseDown == true){
            e.preventDefault();
            this.moveX = e.clientX - this.offsetX + this.backupX;
            // this.offsetX = e.moveX;
            console.log(this.moveX);
            
         
        }

    }

    onUp(e){
        this.mouseDown = false;
        this.backupX = this.moveX;
    }
}


window.onload = ()=>{
    new App();
}