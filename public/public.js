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
var gameType;
var isPlayed = true;
//
//**COLORS**
//
var COLORS;
function setup() {
  COLORS = {
              'BROW' : color('#54494B'),
              'WHITE' : color('#F1F7ED'),
              'GREEN' : color('#91C7B1'),
              'RED' : color('#B33951'),
              'YELLOW' : color('#E3D081')
            };
  //Set rackets
  player = new Player((windowWidth*playerX)/100, COLORS.GREEN);
  enemy = new Enemy((windowWidth*enemyX)/100, COLORS.RED);
  //Set ball
  ball = new Ball(15);
  
  var canvas = createCanvas(windowWidth, windowHeight);
}


function draw() {
  if(isPlayed == true){
    drawScrenary();
    drawPoints()
    //Player actions
    player.move(pmouseY);
    player.draw();
    //Enemy actions
    enemy.move(windowHeight/2);
    enemy.draw();
    //Ball actions
    ball.move();
    ball.draw();
  }else if(isPlayed == false){
  }
}
