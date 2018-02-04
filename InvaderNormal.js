class InvaderNormal extends Invader {

    constructor(x, y) {
        super(x, y);
        super.img = loadImage('/img/invader.png');
        this.hp = 150;
    }
}