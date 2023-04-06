class Player{
constructor(playerTwo, playerThree, playerFour, playerFive) {
    this.playerTwo = playerTwo;
    this.playerThree = playerThree;
    this.playerFour = playerFour;
    this.playerFive = playerFive;
    this.width = 30;
    this.height = 30;
    this.x = 10;
    this.y = 10;
}

draw(){
    fill("red");
    rect(this.x, this.y, this.width, this.height); 
    this.crash();
    this.crash2();
    this.crash3();
}

moveRight(){
    if (this.x < 960) {
    this.x += 50;
    this.collision();
    }
    console.log("right");
    console.log(this.x);
    console.log(this.y);
}

moveLeft(){
    if (this.x > 50) {
    this.x -= 50;
    this.collision();
    }
    console.log("left");  
    console.log(this.x);
    console.log(this.y); 
}

moveUp(){
    if (this.y > 50) {
    this.y -= 50;
    this.collision();
    }
    console.log("up");
    console.log(this.x);
    console.log(this.y);
}

moveDown(){
    if (this.y < 960) {
    this.y += 50;
    this.collision();
    }
    console.log("down");
    console.log(this.x);
    console.log(this.y);
}

collision() {
    if (this.x === this.playerTwo.x && this.y === this.playerTwo.y) { // PlayerTwo abholen via constructor;
        console.log("catch");
    let randomX = (Math.floor(Math.random() * 19,2) * 50 + 50) + 10; // Random-Zahl generieren;
    let randomY = (Math.floor(Math.random() * 19,2) * 50 + 50) + 10;
    this.playerTwo.x = randomX;
    this.playerTwo.y = randomY;

    this.width = this.width + 20;
    this.height = this.height + 20;
    
    if (this.width > 200 && this.height > 200) {
        console.log("Enough! It is big enough.");
        noLoop()
        document.querySelector(".theEnd").innerText = "Big enough!"
    }

    game.collisionCount++ // Zählen der collisions; Später eventuell noch oben rechts anzeigen lassen.
    document.querySelector(".score").innerText = game.collisionCount;
    console.log(game.collisionCount);
}}

crash() {
    if (dist(this.x, this.y, this.playerThree.x, this.playerThree.y) < this.width) {
        console.log("Oh no, crash");

        this.width = this.width - 2;
        this.height = this.height - 2;
}}

crash2() {
    if (dist(this.x, this.y, this.playerFour.x, this.playerFour.y) < this.width) {
        console.log("Oh no, crash");

        this.width = this.width - 2;
        this.height = this.height - 2;
}}

crash3() {
    if (dist(this.x, this.y, this.playerFive.x, this.playerFive.y) < this.width) {
        console.log("Oh no, crash");

        this.width = this.width - 2;
        this.height = this.height - 2;
}}

}
