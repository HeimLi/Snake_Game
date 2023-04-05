class PlayerFour{
    constructor() {
        this.width = 60;
        this.height = 60;
        this.x = 210;
        this.y = 210;
        this.velocity = 2;
    }
    
    draw(){
        if (this.x < 950 && this.y == 210) { // Enemie immer im Kreis;
            this.x += this.velocity;
        }
        if (this.x > 940 && this.y < 950) {
            this.y += this.velocity;
        }
        if (this.y > 940) {
            this.x -= this.velocity;
        }
        if (this.x < 20 && this.y < 960) {
            this.y -= this.velocity;
        }

        console.log(this.x);
        console.log(this.y);
        
        fill("plum");
        rect(this.x, this.y, this.width, this.height);
    }
    
    }
