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
function drawPoints(){
  //Configure text layout
  fill(COLORS.WHITE);
  textSize(16);
  //This player points
  text(player.getPoints(), (windowWidth/2)-50, 50);
  //Enemy points
  text(enemy.getPoints(), (windowWidth/2)+50, 50);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  player.update((windowWidth*playerX)/100);
  enemy.update((windowWidth*enemyX)/100);
}
