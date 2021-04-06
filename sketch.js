var rocket, asteroid
var rocketImage, asteroidImage

function preload (){
  rocketImage = loadImage("Rocket.png");
  asteroidImage = loadImage("Asteroid.jpg");
}
function setup() {
  createCanvas(800,400);
  rocket = createSprite(200, 200, 50, 50);
  rocket.addImage("Rocket",rocketImage);
  rocket.scale = 0.1;
  asteroid = createSprite(600,200,50,50)
  asteroid.addImage("Asteroid",asteroidImage);
  asteroid.scale = 0.1;
  
}

function draw() {
  background(255,255,255);  
  

  drawSprites();
}

