import { Item } from "./Item.js";
import { Ball } from "./ball.js";
import {Polygon} from './polygon.js';

class App {
  constructor() {
    // canvas 그리는 구간
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    this.ball_count = Math.floor(Math.random() * 30) + 8;
    this.ball = new Array();
    let x = 100; 
    let y = 100;
    let radius = 3;
    let speed = 2;
    for(let i =0 ;i  <this.ball_count;i++){
      
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        
        let color = `rgba(${r},${g},${b},0.2)`;
        // let color = 'black';

        this.ball.push(new Ball(x,y,radius,speed,color));
    }

    //canvas 끝

    const ITEM_LIST = {
      'BALL': './ball/index.html',
      'BALL_LINE': './ball_line/index.html',
      'CRASH': './crash/index.html',
      'GRAVITY': './gravity/index.html',
      'PARTICLE': './particle/index.html',
      'PARTICLE CRASH': './particle_crash/index.html',
      'POLYGON\n(clone coding)': './polygon/index.html',
      'TEST': './test/index.html',
    };

    this.content = document.getElementById("content"); //부모요소
 
    this.item = new Item(this.content, ITEM_LIST);
    this.item.create();
    this.transitionCrash = 1;

    this.mouseDown = false;
    this.moveX = 0;
    this.backupX = 0;
    this.speed = 0;
	  
	     this.polygon = new Polygon(
            window.innerWidth / 2,
            window.innerHeight - (window.innerHeight/10),
            window.innerHeight /20,
            Math.floor(Math.random() * 6 + 3)
        );

    window.addEventListener("pointerdown", this.onDown.bind(this));

    window.addEventListener("pointermove", this.onMove.bind(this));

    window.addEventListener("pointerup", this.onUp.bind(this));

    window.requestAnimationFrame(this.update.bind(this));
  }

  //canvas 및 가속도의 변화를 업데이트 
  update() {
    window.requestAnimationFrame(this.update.bind(this));
    this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    this.moveX *= 0.9;  //가속도
    this.item.moveAnimate(this.moveX,this.ctx,this.transitionCrash);

	
    //canvas구간
 
    this.connect();
	   this.polygon.animate(this.ctx,this.moveX,window.innerWidth,window.innerHeight);
  }

  //canvas 공의 선을 연결및 ball을 보여주는 함수
  connect(){
    for(let i=0; i< this.ball.length; i++){
      this.ball[i].animate(this.ctx,window.innerWidth,window.innerHeight);
      for(let j =0 ;j <this.ball.length; j++){
          let dx = (this.ball[i].x - this.ball[j].x);
          let dy = (this.ball[i].y - this.ball[j].y);
          let distance = Math.sqrt(dx*dx + dy*dy);
          if(distance <100){
              this.ctx.strokeStyle = this.ball[j].color;
              this.ctx.lineWidth = 0.1;
              this.ctx.moveTo(this.ball[i].x,this.ball[i].y);
              this.ctx.lineTo(this.ball[j].x,this.ball[j].y);
              this.ctx.stroke();
          }
      }
  }
  }

  onDown(e) {
    this.mouseDown = true;
    this.offsetX = e.clientX;
    this.moveX = 0;
    
    
  }

  onMove(e) {
    if (this.mouseDown == true) {
      e.preventDefault();
      this.moveX = e.clientX - this.offsetX;
      this.offsetX = e.clientX;
    }

    
  }

  onUp(e) {
    this.mouseDown = false;
    
    if(this.item.transitionX >= 200){
      this.item.leftCheck = 1;
    }else if(this.item.transitionX <= 20){
      this.item.leftCheck = 0;
     
    }
   
    if(this.item.transitionX <= -(this.item.block-800)){
      this.item.rightCheck = 1;
    }else if(this.item.transitionX >= -(this.item.block-900)){
      this.item.rightCheck = 0;
    }


  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

window.onload = () => {
  new App();
};
