export class Item{
    constructor(parent,count){
        this.item = undefined;
        this.parent = parent;
        this.count = count;
     
    }

   create(){
       for(let i =0 ;i < this.count;i++){
            let item = document.createElement('div');
            item.className = 'item';
            this.parent.appendChild(item);
  
       }

        this.selectItem();
    }

    selectItem(){
        this.item = document.querySelectorAll('.item');
        if(this.item.length < 0){
            return 'failed';
        }else if(this.item.length > 0){
            return 'success';
        }
    }

    // moveAnimate(moveX){
    //     for(let i =0 ;i  < this.item.length ;i++){
    //         this.item[i].style.transform = `translateX(${moveX}px)`;
    //     }
    // }
 
    moveAnimate(moveX,test){
        for(let i =0 ;i  < this.item.length ;i++){
            this.item[i].style.transform = `translateX(${moveX}px)`;
        }
        test.innerText = `${moveX}`;
    }
}