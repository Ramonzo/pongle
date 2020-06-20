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
    let targetY = y;
    let newY = this.y + ((targetY-this.y)*0.1);
    if(!this.collisionScenary(newY)){
      this.y = newY;
    }
  }
  collisionScenary(y){
    if((y-(this.sizeY/2)) >= netSize && (y+(this.sizeY/2)) <= (windowHeight-netSize)){
      return false;
    }
    return true;
  }
  collisionEffect(){
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return [this.sizeX, this.sizeY];
  }
}
