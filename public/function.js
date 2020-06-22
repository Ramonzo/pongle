function prepareGame(){
  COLORS = {
              'BROW' : color('#54494B'),
              'WHITE' : color('#F1F7ED'),
              'GREEN' : color('#91C7B1'),
              'RED' : color('#B33951'),
              'YELLOW' : color('#E3D081')
            };
  //Set ball
  ball = new Ball(15);
  player = new Player((windowWidth*playerX)/100, COLORS.GREEN);
  switch(gameMode){
    case 'multi':
      //Set rackets
      enemy = new Enemy((windowWidth*enemyX)/100, COLORS.RED);
    break;
    case 'single':
    break;
  }
  isPlayed = true;
}
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
  textSize((windowWidth*30)/100);
  let textGreen = COLORS.GREEN;
  let textRed = COLORS.RED;
  textGreen.setAlpha(50);
  textRed.setAlpha(50);
  //This player points
  fill(textGreen);
  text(player.getPoints(), (windowWidth*20)/100, (windowHeight/2)+100);
  if(gameMode == 'multi'){
    //Enemy points
    fill(textRed);
    text(enemy.getPoints(), (windowWidth*60)/100, (windowHeight/2)+100);
  }
  textSize(16);
  //Velocity text
  fill(COLORS.YELLOW);
  text("Velocity: "+ball.getVel(), (windowWidth/2)-120, windowHeight-50);
  textGreen.setAlpha(255);
  textRed.setAlpha(255);
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
