var dvdImage
var x,y,dx,dy

function preload() {
  x = 0
  y = 0
  dx = 8
  dy = 8
 dvdImage = loadImage('dvdlogo.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  x += dx;
  if(x < 0 || x > windowWidth - 100){
    dx *= -1
  }
  y += dy;
  if(y < 0 || y > windowHeight - 100){
    dy *= -1
  }
  image(dvdImage,x,y,100,100)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    dx *= 1.1
    dy *= 1.1
  } else if (keyCode === DOWN_ARROW) {
    dx *= .9
    dy *= .9
  }
}

