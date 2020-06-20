function drawScrenary(){
  //Configure drawed layout rules
  background(COLORS.BROW);
  noStroke();
  rectMode(CENTER);
  //
  //Draw scenary borders
  //Left and Right
  createScenaryBar(0, windowHeight/2, borderSize, windowHeight);
  createScenaryBar(windowWidth, windowHeight/2, borderSize, windowHeight);
  //Top and Bottom
  createScenaryBar(windowWidth/2, 0, windowWidth, borderSize);
  createScenaryBar(windowWidth/2, windowHeight, windowWidth, borderSize);
  //
  //Draw center bar
  fill(COLORS.WHITE);
  rect(windowWidth/2, windowHeight/2, netSize, windowHeight);
  //Local function
  function createScenaryBar(x, y, sizeX, sizeY){
    fill(COLORS.WHITE);
    rect(x, y, sizeX, sizeY);
  }
}
function drawTexts(){
  //Configure text layout
  textSize(16);
  //This player points
  fill(COLORS.GREEN);
  text(player.getPoints(), (windowWidth/2)-50, 50);
  //Enemy points
  fill(COLORS.RED);
  text(enemy.getPoints(), (windowWidth/2)+50, 50);
  //Velocity text
  fill(COLORS.YELLOW);
  text("Velocity: "+ball.getVel(), (windowWidth/2)-120, windowHeight-50);
}
function hoWin(){
  if(player.getPoints() >= 3){
  }else if(enemy.getPoints() >= 3){
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  player.update((windowWidth*playerX)/100);
  enemy.update((windowWidth*enemyX)/100);
}
