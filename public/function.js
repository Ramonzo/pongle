function drawScrenary(){
  background(0);
  noStroke();
  rectMode(CENTER);
  
  //Draw center bar
  fill(255);
  rect(windowWidth/2, windowHeight/2, netSize, windowHeight);
  
  //Draw scenary borders
  fill(255);
  //Left and Right
  rect(0, windowHeight/2, borderSize, windowHeight);
  rect(windowWidth, windowHeight/2, borderSize, windowHeight);
  //Top and Bottom
  rect(windowWidth/2, 0, windowWidth, borderSize);
  rect(windowWidth/2, windowHeight, windowWidth, borderSize);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
