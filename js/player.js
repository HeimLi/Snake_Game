class Player{
constructor(playerTwo) {
    this.playerTwo = playerTwo;
    this.width = 30;
    this.height = 30;
    this.x = 10;
    this.y = 10;
    this.snakeBody = [];
    this.speedX = 0;
    this.speedY = 0;
    this.blockSize = 50;
}

draw(){
    fill("red");
    rect(this.x, this.y, this.width, this.height); // Snake-Kopf;
}

moveRight(){
    if (this.x < 960) {
    this.x += 50;
    this.collision()
    }
    this.snakeBody.forEach(function(snakeBodyPart) { // Körperelement bewegt sich mit nach rechts;
        (snakeBodyPart[0] += 50);
    })

    console.log("right");
    console.log(this.x);
    console.log(this.y);
}

moveLeft(){
    if (this.x > 50) {
    this.x -= 50;
    this.collision() 
    }
    this.snakeBody.forEach(function(snakeBodyPart) { 
        (snakeBodyPart[0] -= 50);
    })
    console.log("left");  
    console.log(this.x);
    console.log(this.y); 
}

moveUp(){
    if (this.y > 50) {
    this.y -= 50;
    this.collision()
    }
    this.snakeBody.forEach(function(snakeBodyPart) { 
        (snakeBodyPart[1] -= 50);
        
    })
    console.log("up");
    console.log(this.x);
    console.log(this.y);
}

moveDown(){
    if (this.y < 960) {
    this.y += 50;
    this.collision();
    }
    this.snakeBody.forEach(function(snakeBodyPart) {
        (snakeBodyPart[1] += 50);
    })
    console.log("down");
    console.log(this.x);
    console.log(this.y);
}

collision() {
    if (this.x === this.playerTwo.x && this.y === this.playerTwo.y) { // PlayerTwo abholen via constructor;
        let randomX = (Math.floor(Math.random() * 19,2) * 50 + 50) + 10; // Random-Zahl generieren;
        let randomY = (Math.floor(Math.random() * 19,2) * 50 + 50) + 10;
        this.playerTwo.x = randomX;
        this.playerTwo.y = randomY;

        console.log("catch");

        game.collisionCount++ // Zählen der collisions; Später eventuell noch oben rechts anzeigen lassen.
        console.log(game.collisionCount);

        if (this.snakeBody.length !== 0) {
        this.snakeBody.push([this.x - (this.blockSize * this.snakeBody.length -1) + 32, this.y]); // snakeBody wächst in leeren Array (jeweils x und y Koordinate);
        }

        else {
        this.snakeBody.push([this.x - (this.blockSize * 2) + 20, this.y]);
        }
    }
        console.log(this.snakeBody);
        console.log(this.snakeBody.length);
        console.log(this.snakeBody[0]);
        console.log(this.snakeBody[1]);
        console.log(this.snakeBody[2]);
        console.log(this.snakeBody[3]);

}
}
