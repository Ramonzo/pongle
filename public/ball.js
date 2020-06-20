class Ball{
  constructor(size){
    this.startVel = 8;
    this.incrementVel = 0.5;
    this.incrementedVel = 0;
    this.xspeed = random(0, 1) < 0.5 ? -this.startVel : this.startVel;
    this.yspeed = random(0, 1) < 0.5 ? -this.startVel : this.startVel;
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = size;
  }
  draw(){
    fill(COLORS.YELLOW);
    ellipse(this.x, this.y, this.size*2, this.size*2);
  }
  move(){
    //Change position based on velocity increments and xspeed
    this.x += this.xspeed < 0 ? this.xspeed - this.incrementedVel : this.xspeed + this.incrementedVel;
    this.y += this.yspeed < 0 ? this.yspeed - this.incrementedVel : this.yspeed + this.incrementedVel;
    //Scenary Collision
    if (this.x + this.size >= windowWidth - borderSize/2) {
      this.xspeed = -this.xspeed;
      player.addPoint();
    }
    if(this.x - this.size <= borderSize/2){
      this.xspeed = -this.xspeed;
      enemy.addPoint();
    }
    if (this.y + this.size >= windowHeight - borderSize/2 || this.y - this.size <= borderSize/2) {
      this.yspeed = -this.yspeed;
    }
    //Racket Collision
    if(this.y - this.size >= player.getPos()[1] - player.getSize()[1] && 
    this.y + this.size <= player.getPos()[1] + player.getSize()[1]){
      if(this.x + this.size >= player.getPos()[0] - player.getSize()[0] && 
      this.x - this.size <= player.getPos()[0] + player.getSize()[0] && this.xspeed < 0){
        
        this.xspeed = -this.xspeed;
        
        this.incrementedVel = this.startVel + this.incrementedVel < 20 ? this.incrementedVel + this.incrementVel : this.incrementedVel;
      }
    }
  }
  //To show the ball vel
  getVel(){
    return this.startVel + this.incrementedVel >= 20 ? "Max" : this.startVel + this.incrementedVel;
  }
}
