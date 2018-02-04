class Laser {

    constructor(x, y, r, color, positif) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.positif = positif;
        this.toDelete = false;
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    move() {
        if (this.positif === true) {
            this.y -= 5;
        } else if (this.positif === false) {
            this.y += 5;
        }

    }

    hits(obj) {
        let d = dist(this.x, this.y, obj.x, obj.y);
        if (d < this.r + obj.r) {
            return true;
        }
        return false;
    }

    evaporate() {
        this.toDelete = true;
    }
}