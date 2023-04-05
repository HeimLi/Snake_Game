class Game {
    constructor(){
        this.playerFour = new PlayerFour();
        this.playerThree = new PlayerThree();
        this.playerTwo = new PlayerTwo();
        this.player = new Player(this.playerTwo, this.playerThree);
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
    }

    

    }