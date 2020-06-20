//
//**GAME CONFIGURATIONS**
//
var netSize = 10;
var borderSize = 20;
//
//COLORS
//
var COLOR;
function setup() {
  COLOR = {
              'BROW':color('#54494B'),
              'WHITE':color('#F1F7ED'),
              'GREEN':color('#91C7B1'),
              'RED':color('#B33951'),
              'YELLOW':color('#E3D081')
            };
  
  var canvas = createCanvas(windowWidth, windowHeight);
}


function draw() {
  drawScrenary();
}
