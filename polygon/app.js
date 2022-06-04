class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        this.mouseDown = false;

        // window.addEventListener('pointerdown',this.onDown.bind(this));
        // window.addEventListener('pointermove',this.onMove.bind(this));
        // window.addEventListener('pointerup',this.onUp.bind(this));

     
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.polygon = new Polygon(
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / 3,
            4
        );
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.polygon.animate(this.ctx);
    }

    onDown(e) {
        this.mouseDown = true;
        console.log('down');
    }

    onMove(e) {
        if (this.mouseDown == true) {
            console.log('move');
        }

    }

    onUp(e) {
        this.mouseDown = false;
        console.log('up');
    }
}

class Polygon {
    constructor(x, y, radius, side) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.side = side;


        this.PI2 = Math.PI * 2;
    }

    animate(ctx) {

        ctx.save();
        ctx.fillStyle = 'black';
        ctx.beginPath();

        const angle = this.PI2 / this.side;
 
        ctx.translate(this.x, this.y);

        for (let i = 0; i < this.side; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

          

          
            (i == 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

            console.log(x, y);
        }


        ctx.fill();
        ctx.closePath();
        ctx.restore();



    }


}

window.onload = () => {
    new App();
}