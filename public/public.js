//
//**GAME CONFIGURATIONS**
//
var player;
var playerX = 3;
var enemy;
var enemyX = 97;
var ball;
var netSize = 10;
var borderSize = 20;
var gameMode = 'multi';
var isPlayed = false;
//
//**COLORS**
//
var COLORS;
function setup() {
  //Configure Canvas
  var canvas = createCanvas(windowWidth, windowHeight);
  //Do somethings to game start
  prepareGame();
}


function draw() {
  if(isPlayed == true){
    //Draw Scenary and layout texts
    drawScrenary();
    drawTexts();
    //Ball actions
    ball.move();
    ball.draw();
    //Player actions
    player.move(pmouseY);
    player.draw();
    switch(gameMode){
      case 'multi':
        //Enemy actions
        enemy.move(windowHeight/2);
        enemy.draw();
      break;
      case 'single':
      break;
    }
  }else if(isPlayed == false){
  }
}
