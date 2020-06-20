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
  fill(255);
  rect(windowWidth/2, windowHeight/2, netSize, windowHeight);
  function createScenaryBar(x, y, sizeX, sizeY){
    fill(COLORS.WHITE);
    rect(x, y, sizeX, sizeY);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
