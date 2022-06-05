class App{
    constructor(){
        document.body.style.overscrollBehaviorY = 'none';
        this.content = document.getElementById('content');

        this.itemCount = 4;
        
        
        for(let i =0 ;i < this.itemCount ; i++){
            this.item = document.createElement('div');
            this.item.className = 'item';   
            this.content.appendChild(this.item);
        }
        this.contents = document.querySelectorAll('.item');
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

        for(let i =0 ; i < this.contents.length ; i++){
            this.contents[i].style.transform = `translate(${this.moveX}px)`;
        }
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