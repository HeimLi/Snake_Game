const game = new Game();
console.log(game);

function preload() {
    game.preload()
}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    game.draw()
}

function keyPressed(){
    if (keyCode === 37) {
        game.player.moveLeft()
    }
    if(keyCode === 38){
        game.player.moveUp()
    }
    if (keyCode === 39) {
        game.player.moveRight()
    }
    if(keyCode ===40){
        game.player.moveDown()
    }

    
}