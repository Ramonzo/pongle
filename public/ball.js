class Ball{
  constructor(size){
    this.vel = 8;
    this.xspeed = random(0, 1) < 0.5 ? -this.vel : this.vel;
    this.yspeed = random(0, 1) < 0.5 ? -this.vel : this.vel;
    this.x = windowWidth/2;
    this.y = windowHeight/2;
    this.size = size;
  }
  draw(){
    fill(COLORS.YELLOW);
    ellipse(this.x, this.y, this.size*2, this.size*2);
  }
  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
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
    if(this.y - this.size >= player.getPos()[1] - player.getSize()[1] && 
    this.y + this.size <= player.getPos()[1] + player.getSize()[1]){
      if(this.x + this.size >= player.getPos()[0] - player.getSize()[0] && 
      this.x - this.size <= player.getPos()[0] + player.getSize()[0] && this.xspeed < 0){
        this.xspeed = -this.xspeed;
      }
    }
  }
}
