class Game {
    constructor(){
        this.playerFive = new PlayerFive();
        this.playerFour = new PlayerFour();
        this.playerThree = new PlayerThree();
        this.playerTwo = new PlayerTwo();
        this.player = new Player(this.playerTwo, this.playerThree, this.playerFour, this.playerFive);
        this.background = new Background();
        this.collisionCount = 0; 
    }

    preload(){
    }

    draw(){
        this.background.draw();
        this.player.draw();
        this.playerTwo.draw();
        this.playerThree.draw();
        this.playerFour.draw();
        this.playerFive.draw();
    }

    

    }