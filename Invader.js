class Invader {

    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.r = 15;
        this.img = img;
        this.xdir = 1;
        this.enemyLasers = [];
    }


    show() {
        image(this.img, this.x, this.y, this.r * 2, this.r * 2);
    }

    move() {
        this.x += this.xdir;
    }

    shiftDown() {
        this.xdir *= -1;
        this.y += this.r;
    }

    shoot() {
        let enemyLaser = new Laser(this.x, this.y, 4, color('rgb(200, 200, 0)'), false);
        this.enemyLasers.push(enemyLaser);
    }
}