export class Item {
  constructor(parent, ITEM_LIST) {
    this.item = undefined;
    this.itemTitle = undefined;

    this.parent = parent;
    this.count = 0;
    this.transitionX = 0;


    this.ITEM_LIST = ITEM_LIST;
    this.block = 0;

    this.test = document.getElementById('test');
    
    this.leftCheck = 0;
    this.rightCheck = 0;
    this.backup = 900;
  }

  //객체 생성
  create() {
    
    this.getItemCount();
    //ITEM_LIST의 개수 만큼 아이템 객체를 생성
    for (let i = 0; i < this.count; i++) {
      let item = document.createElement("div");
      let item_title_box = document.createElement("div");
      let item_title = document.createElement("h2");

      item.className = "item";
      item_title_box.className = "item_title_box";
      item_title.className = "item_title";

      item_title_box.appendChild(item_title);
      item.appendChild(item_title_box);
      this.parent.appendChild(item);
    }

    this.selectItem();
    this.insertTitle();
    this.setColor();
    this.clickEvent();
  }


  // 생성된 아이템을 선택
  selectItem() {
    this.item = document.querySelectorAll(".item");
    this.itemTitle = document.querySelectorAll(".item_title");

    //아이템이 제대로 선택이 되었는지 확인하는 코드
    if (this.item.length < 0 && this.itemTitle < 0) {
      return "failed";
    } else if (this.item.length > 0 && this.item_title_box > 0) {
      return "success";
    }
  }

//\========================================================================
  //좌/우 로 드래그할 시 가속도 효과를 내주는 함수
  // moveAnimate(moveX) {
  //  this.transitionX += moveX ; 
    
    

  //   for (let i = 0; i < this.item.length; i++) { 
  //     this.item[i].style.transform = `translateX(${this.transitionX}px)`;
   
  //   }
  
  // }
//\========================================================================













  //가속도 빼고 테스트
  moveAnimate(moveX,ctx,transitionCrash) {
    this.transitionX += moveX  ; 
    
     for (let i = 0; i < this.item.length; i++) { 
       this.item[i].style.transform = `translateX(${this.transitionX}px)`;
    
     }
     //ITEM_LIST의 길이를 구함
     this.block = ((this.item[0].offsetWidth) + (window.innerWidth * 5 /100) )* this.count;

     //ITEM_LIST의 길이를 보여줌
     ctx.fillStyle = 'black';
     ctx.beginPath();
     ctx.rect(0,220,this.block,10);
     ctx.fill();

    if(this.leftCheck == 1){
      this.transitionX *= 0.9;
    }
    
    if(this.rightCheck == 1){
      this.backup *= 0.9;
      console.log(this.backup);
    }

    
     



    //  this.transitionX *= transitionCrash;
 
     this.test.innerText  = `${this.transitionX} `;
   }

















   //아이템들 각각의 제목을 넣는 함수 
  insertTitle() {
    let count = 0;
    for (let i in this.ITEM_LIST) {
      this.itemTitle[count].innerText = `${i}`;
      count++;
    }
  }


  //아이템들의 색상을 랜덤으로 생성
  setColor() {
    for (let i = 0; i < this.count; i++) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let color = `rgba(${r},${g},${b},0.43)`;
      // let color = `rgb(${r},${g},${b})`;

      this.item[i].style.backgroundColor = `${color}`;
    }

    return 0;
  }

  //ITEM_LIST 의 개수를 가져옴
  getItemCount() {
    for (let i in this.ITEM_LIST) {
      this.count += 1;
    }

    return 0;
  }
    
  //아이템을 클릭했을 때 발생하는 이벤트
  clickEvent() {
    let count = 0;

    this.item.forEach((e, key) => {
      e.addEventListener("click", () => {
        count = 0;
        for (let i in this.ITEM_LIST) {
          if (key == count) {
           location.href = this.ITEM_LIST[i];
            
            return 0;
          } else {
            count++;
          }
        }
      });
    });
  }
}
