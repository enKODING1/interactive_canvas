class App{
    constructor(){
        this.content = document.getElementById('content');

        this.itemCount = 4;
        
        
        for(let i =0 ;i < this.itemCount ; i++){
            this.item = document.createElement('div');
            this.item.className = 'item';   
            this.content.appendChild(this.item);
        }
        this.mouseDown = false;
        this.moveX = 0;
        
        window.addEventListener('pointerdown',this.onDown.bind(this));

        window.addEventListener('pointermove',this.onMove.bind(this));

        window.addEventListener('pointerup',this.onUp.bind(this));
        
    }

    onDown(e){
        this.mouseDown = true;
        this.offsetX = e.clientX;
    }


    onMove(e){
        if(this.mouseDown == true){

            this.moveX = e.clientX - this.offsetX;
            this.offsetX = e.clientX;
        }
    }

    onUp(e){
        this.mouseDown = false;
    }
}


window.onload = ()=>{
    new App();
}