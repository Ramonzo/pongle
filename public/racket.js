class Racket{
  constructor(x, COLOR){
    this.sizeX = (windowWidth*2)/100;
    this.sizeY = (windowHeight*20)/100;
    this.x = x;
    this.y = windowHeight/2;
    this.COLOR = COLOR;
  }
  draw(){
    rectMode(CENTER);
    fill(this.COLOR);
    rect(this.x, this.y, this.sizeX, this.sizeY);
  }
  move(y){
    this.y = y;
  }
  collision(x, y){
  }
  collisionEffect(){
  }
}
