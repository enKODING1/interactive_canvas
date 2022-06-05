import { Ball } from './Ball.js';

class App {
    constructor() {

        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize', this.resize.bind(this));
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        this.resize();

      

        window.requestAnimationFrame(this.animate.bind(this));
        this.ball = new Array();
        let ball_count = 100;

        for (let i = 0; i < ball_count; i++) {
            // let r = Math.floor(Math.random() * 255);
            // let g = Math.floor(Math.random() * 255);
            // let b = Math.floor(Math.random() * 255);
            // let color = `rgba(${r},${g},${b},0.4)`;
            let speed = Math.random() * 2 + 0.1;
            let color = 'white';
            this.ball.push(new Ball(100, 100, 5, speed, color))
        }
    }
    resize() {
        this.canvas.width = window.innerWidth * this.pixelRatio;
        this.canvas.height = window.innerHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio,this.pixelRatio);


    }
    animate() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        window.requestAnimationFrame(this.animate.bind(this))
        this.connect();
    }

    connect() {
        for (let i = 0; i < this.ball.length; i++) {
            this.ball[i].draw(this.ctx, window.innerWidth, window.innerHeight);
            for (let j = 0; j < this.ball.length; j++) {
                let dx = this.ball[i].x - this.ball[j].x;
                let dy = this.ball[i].y - this.ball[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 80) {
                    this.ctx.lineWidth = 0.1;
                    this.ctx.strokeStyle = this.ball[i].color;
                    this.ctx.moveTo(this.ball[i].x, this.ball[i].y);
                    this.ctx.lineTo(this.ball[j].x, this.ball[j].y);
                    this.ctx.stroke();
                }

            }
        }
    }

}




window.onload = () => {
    new App();
}