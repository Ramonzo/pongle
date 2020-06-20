class Racket{
  constructor(x, COLOR){
    this.sizeX = (windowWidth*2)/100;
    this.sizeY = (windowHeight*20)/100;
    this.x = x;
    this.y = windowHeight/2;
    this.COLOR = COLOR;
  }
  racketModel(){
    rectMode(CENTER);
    fill(this.COLOR);
    rect(this.x, this.y, this.sizeX, this.sizeY);
  }
  getPos(){
    return [this.x, this.y];
  }
  getSize(){
    return [this.sizeX, this.sizeY];
  }
  update(x){
    this.x = x;
    this.sizeX = (windowWidth*2)/100;
    this.sizeY = (windowHeight*20)/100;
    this.y = windowHeight/2;
  }
}
class Player extends Racket{
  constructor(x, COLOR){
    super(x, COLOR);
  }
  draw(){
    this.racketModel();
  }
  move(y){
    let targetY = y;
    let newY = this.y + ((targetY-this.y)*0.1);
    if(!this.collisionScenary(newY)){
      this.y = newY;
    }
  }
  collisionScenary(y){
    if((y-(this.sizeY/2)) >= borderSize && (y+(this.sizeY/2)) <= (windowHeight-borderSize)){
      return false;
    }
    return true;
  }
}
class Enemy extends Racket{
  constructor(x, COLOR){
    super(x, COLOR);
  }
  draw(){
    this.racketModel();
  }
  move(y){
    this.y = y;
  }
}
