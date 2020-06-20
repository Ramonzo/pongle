class Racket{
  constructor(x, COLOR){
    this.sizeX = (windowWidth*2)/100;
    this.sizeY = (windowHeight*20)/100;
    this.x = x;
    this.y = windowHeight/2;
    this.COLOR = COLOR;
    this.points = 0;
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
    return [this.sizeX/2, this.sizeY/2];
  }
  update(x){
    this.x = x;
    this.sizeX = (windowWidth*2)/100;
    this.sizeY = (windowHeight*20)/100;
    this.y = windowHeight/2;
  }
  addPoint(){
    this.points++;
  }
  getPoints(){
    return this.points;
  }
}
//Player Class
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
    if(y-(this.sizeY/2) >= borderSize/2 && y+(this.sizeY/2) <= windowHeight-(borderSize/2)){
      return false;
    }
    return true;
  }
}
//Enemy class
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
