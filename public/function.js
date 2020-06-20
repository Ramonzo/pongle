function drawScrenary(){
  background(0);
  noStroke();
  rectMode(CENTER);
  
  //Draw center bar
  fill(255);
  rect(windowWidth/2, windowHeight/2, 20, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
