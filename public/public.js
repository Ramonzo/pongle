//
//**GAME CONFIGURATIONS**
//
var player;
var enemy;
var netSize = 10;
var borderSize = 20;
//
//COLORS
//
var COLORS;
function setup() {
  noCursor();
  COLORS = {
              'BROW' : color('#54494B'),
              'WHITE' : color('#F1F7ED'),
              'GREEN' : color('#91C7B1'),
              'RED' : color('#B33951'),
              'YELLOW' : color('#E3D081')
            };
  player = new Racket((windowWidth*3)/100, COLORS.GREEN);
  enemy = new Racket((windowWidth*97)/100, COLORS.RED);
  var canvas = createCanvas(windowWidth, windowHeight);
}


function draw() {
  drawScrenary();
  player.move(pmouseY);
  player.draw();
  enemy.move(windowHeight/2);
  enemy.draw();
}
