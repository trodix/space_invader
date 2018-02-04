let ship;
let invaders = [];
let lasers = [];
let enemyLasers = [];
let score = 0;

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (let i = 0; i < 10; i++) {
        invaders[i] = new InvaderNormal(i * 40 + 40, 60);
    }
    invaders.push = new InvaderBoss(invaders.length * 40 + 40, 60);
}

function draw() {
    background(51);
    //console.log('SCORE: ' + score);
    //console.log('LIFE: ' + ship.life);
    fill(255, 255, 255);
    ship.show();
    ship.move();

    for (let i = 0; i < enemyLasers.length; i++) {
        enemyLasers[i].show();
        enemyLasers[i].move();
        if (enemyLasers[i].hits(ship)) {
            ship.life += 1;
            enemyLasers[i].evaporate();
            if (ship.life > 3) {
                lose();
            }
            console.log('LIFE: ' + ship.life);
        }
    }
    for (let i = 0; i < lasers.length; i++) {
        lasers[i].show();
        lasers[i].move();
        for (let j = 0; j < invaders.length; j++) {
            if (lasers[i].hits(invaders[j])) {
                invaders[j].hp -= ship.damage;
                if (invaders[j].hp <= 0) {
                    score += 1;
                    invaders.splice(j, 1);
                }

                lasers[i].evaporate();

                if (invaders.length <= 0) {
                    win();
                }
            }
        }
    }

    let border = false;
    for (let i = 0; i < invaders.length; i++) {
        invaders[i].show();
        invaders[i].move();
        if (invaders[i].x > width || invaders[i].x < 0) {
            border = true;
        }
        if (invaders[i].y < 0 || (invaders[i].x === Ship.x && invaders[i].y === Ship.y)) {
            lose();
        }
    }

    if (border) {
        for (let i = 0; i < invaders.length; i++) {
            invaders[i].shiftDown();
        }
    }

    for (let i = lasers.length - 1; i >= 0; i--) {
        if (lasers[i].toDelete) {
            lasers.splice(i, 1);
        }
    }

    for (let i = 0; i < invaders.length; i++) {
        setTimeout(invaders[Math.floor(Math.random() * invaders.length)].shoot(), Math.random() * 2000);
        for (let j = 0; j < enemyLasers[j]; j++) {
            enemyLasers.push(invaders[i].enemyLasers[j]);
            console.log(invaders[i].enemyLasers[j].color());
        }
    }
}


function win() {
    fill(255, 255, 255);
    text('YOU WIN !', width / 2, height / 2);
    console.log('YOU WIN !');
}

function lose() {
    fill(255, 255, 255);
    text('YOU LOSE !', width / 2, height / 2);
    console.log('YOU LOSE !');
}



function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}


function keyPressed() {
    if (key === ' ') {
        let laser = new Laser(ship.x, height, 8, color(150, 0, 200), true);
        lasers.push(laser);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}