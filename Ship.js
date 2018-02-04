class Ship {

    constructor() {
        this.x = width / 2;
        this.y = height - 40;
        this.xdir = 0;
        this.img = loadImage('/img/ship.png');
        this.hp = 100;
        this.life = 1;
        this.damage = 150;
    }

    show() {
        image(this.img, this.x, this.y, 40, 40);
    }

    move(dir) {
        if (this.x <= 0) {
            this.x = 10;
            this.xdir = 1;
        } else if (this.x >= width) {
            this.x = width - 10;
            this.xdir = -1;
        }
        this.x += this.xdir * 5;
    }

    setDir(dir) {
        this.xdir += dir;
    }
}