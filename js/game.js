class Game {
    constructor(){
        this.playerTwo = new PlayerTwo();
        this.player = new Player(this.playerTwo);
        this.background = new Background();
        this.collisionCount = 0;
    }

    preload(){
    }

    draw(){
        this.background.draw()
        this.player.draw()
        this.playerTwo.draw() 
        this.player.snakeBody.forEach(function(snakeBodyPart) {
            rect(snakeBodyPart[0], snakeBodyPart[1], 30, 30)
        })
    }

    

    }