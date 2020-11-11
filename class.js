class GameElement {
    //attributen
    x;
    y;
    width;
    height;
    hitbox;

    constructor(_x, _y, _width, _height, _hitbox) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.hitbox = _hitbox;
    }
    //methoden

}

class Game {
    //attributen
    score;
    player;
    enemys;
    platforms;
    finish;


    //methoden
    runGame() {
        // Kleur de achtergrond zwart, zodat je het kunt zien
        background("black");
        //player
        player[0].showPlayer();


    }
}

class Player extends GameElement {
    //attributen
    xSpeed;
    ySpeed;
    health;
    strength;

    constructor(_x, _y, _width, _height, _hitbox, _xSpeed, _ySpeed, _health, _strength) {
        super(_x, _y, _width, _height, _hitbox);
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
        this.health = _health;
        this.strength = _strength;
    }
    //methoden
    showPlayer() {
        fill("red");
        rect(this.x, this.y, this.width, this.height);
    }

    updatePlayer() {

    }

    movePlayer() {

    }

    attackPlayer() {

    }

    takeDamagePlayer() {

    }

    collisionPlayer() {

    }

}

class Enemy extends GameElement {
    //attributen
    xSpeed;
    ySpeed;
    health;
    strength;

    constructor(_x, _y, _width, _height, _hitbox, _xSpeed, _ySpeed, _health, _strength) {
        super(_x, _y, _width, _height, _hitbox);
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
        this.health = _health;
        this.strength = _strength;
    }
    //methoden
    showEnemy() {

    }

    updateEnemy() {

    }

    movementEnemy() {

    }

    attackEnemy() {

    }

    takeDamageEnemy() {

    }

    collisionEnemy() {

    }

}

class Platform extends GameElement {
    //attributen


    constructor(_x, _y, _width, _height, _hitbox) {
        super(_x, _y, _width, _height, _hitbox);
    }
    //methoden
    showPlatform() {

    }

    collisionPlatform() {

    }

}

class Finish extends GameElement {
    //attributen

    
    constructor(_x, _y, _width, _height, _hitbox) {

    }
    //methoden
    showFinish() {

    }

    collisionFinish() {

    }

}

class Collision {
    //attributen
    hitbox1;
    hitbox2;

    

    //methoden
    detectCollision() {
        
    }

}

