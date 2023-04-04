class Background{
    draw() {
        background(155, 204, 153);
         
        for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
            stroke(255);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
        }
    }
}
