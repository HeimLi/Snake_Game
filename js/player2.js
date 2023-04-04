class PlayerTwo{
    constructor() {
        this.width = 30;
        this.height = 30;
        this.x = 210;
        this.y = 10;
    }
    
    draw(){
        fill("grey");
        rect(this.x, this.y, this.width, this.height);
    }
    
    }
