class InvaderBoss extends Invader {

    constructor(x, y) {
        super(x, y);
        super.img = loadImage('/img/invaderBoss.png');
        this.hp = 500;
    }
}